import { describe, test, expect } from "@jest/globals";
import Quadra from "../src/quadra.js";

describe("Testes da Quadra", () => {
    test("Deve cadastrar uma quadra", () => {
        const quadra = new Quadra("Quadra 1", "Futebol");

        expect(quadra.nome).toBe("Quadra 1");
        expect(quadra.esporte).toBe("Futebol");
    });

    test("Deve apresentar erro sem nome", () => {
        expect(() => {
            new Quadra("", "Futebol");
        }).toThrow("Nome e esporte são obrigatórios.");
    });
});