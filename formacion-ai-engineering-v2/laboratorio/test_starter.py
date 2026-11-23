import unittest

from starter import ScriptedSimulator, load_case, run_agent


class StarterTests(unittest.TestCase):
    def setUp(self):
        self.case = load_case("I-01")

    def test_write_requires_approval(self):
        result = run_agent(ScriptedSimulator(), self.case)
        self.assertEqual(result["status"], "completado")
        self.assertEqual(result["trace"][1]["estado"], "bloqueada")
        self.assertEqual(result["drafts_in_memory"], [])

    def test_approved_draft_stays_in_memory(self):
        result = run_agent(ScriptedSimulator(), self.case, allow_draft=True)
        self.assertEqual(result["trace"][1]["estado"], "ejecutada")
        self.assertEqual(result["drafts_in_memory"], ["Solicitar evidencia adicional."])

    def test_step_limit_stops_without_final_answer(self):
        result = run_agent(ScriptedSimulator(), self.case, max_steps=2)
        self.assertEqual(result["status"], "detenido")
        self.assertEqual(result["reason"], "max_steps")
        self.assertNotIn("answer", result)

    def test_unknown_tool_is_blocked(self):
        class UnknownToolModel:
            def propose(self, case, observations, tools):
                return {"type": "tool", "name": "shell", "args": {"command": "echo unsafe"}}

        result = run_agent(UnknownToolModel(), self.case, max_steps=1)
        self.assertEqual(result["trace"][0]["estado"], "bloqueada")

    def test_invalid_tool_arguments_are_blocked(self):
        class BadArgumentsModel:
            def propose(self, case, observations, tools):
                return {"type": "tool", "name": "buscar_politica", "args": {"seccion": ["POL-1"]}}

        result = run_agent(BadArgumentsModel(), self.case, max_steps=1)
        self.assertEqual(result["trace"][0]["estado"], "bloqueada")

    def test_invalid_final_answer_is_rejected(self):
        class BadAnswerModel:
            def propose(self, case, observations, tools):
                answer = ScriptedSimulator().propose(case, [{}, {}], tools)["answer"]
                answer["categoria"] = ["desconocido"]
                return {"type": "final", "answer": answer}

        with self.assertRaises(ValueError):
            run_agent(BadAnswerModel(), self.case)


if __name__ == "__main__":
    unittest.main()
