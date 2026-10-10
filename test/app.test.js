
import { describe, test, expect } from "@jest/globals";

import {
    cadastrarQuadra,
    cadastrarCliente,
    criarReserva,
    cancelarReserva,
    verificarDisponibilidade
} from "../src/app.js";

describe("Testes do sistema Beach Club", () => {
    test("Deve cadastrar uma quadra", () => {
        const quadra = cadastrarQuadra("Quadra Teste", "Futebol");

        expect(quadra.nome).toBe("Quadra Teste");
        expect(quadra.esporte).toBe("Futebol");
    });

    test("Deve cadastrar um cliente", () => {
        const cliente = cadastrarCliente("João Teste", "11988887777");

        expect(cliente.nome).toBe("João Teste");
        expect(cliente.telefone).toBe("11988887777");
    });

    test("Deve criar uma reserva", () => {
        const cliente = cadastrarCliente("Maria Teste", "11977776666");
        const quadra = cadastrarQuadra("Quadra Reserva", "Vôlei");

        const reserva = criarReserva(
            cliente,
            quadra,
            "25/10/2026",
            "15:00"
        );

        expect(reserva.cliente.nome).toBe("Maria Teste");
        expect(reserva.quadra.nome).toBe("Quadra Reserva");
    });

    test("Não deve permitir duas reservas no mesmo horário", () => {
        const cliente1 = cadastrarCliente("Carlos", "11111111111");
        const cliente2 = cadastrarCliente("Pedro", "22222222222");
        const quadra = cadastrarQuadra("Quadra Conflito", "Futebol");

        criarReserva(cliente1, quadra, "26/10/2026", "16:00");

        expect(() => {
            criarReserva(cliente2, quadra, "26/10/2026", "16:00");
        }).toThrow("Esta quadra já está reservada nesse dia e horário.");
    });

    test("Deve cancelar uma reserva", () => {
        const cliente = cadastrarCliente("Ana", "33333333333");
        const quadra = cadastrarQuadra("Quadra Cancelamento", "Vôlei");

        const reserva = criarReserva(
            cliente,
            quadra,
            "27/10/2026",
            "17:00"
        );

        cancelarReserva(reserva);

        expect(reserva.cancelada).toBe(true);
    });

    test("Deve indicar quando uma quadra está disponível", () => {
        const quadra = cadastrarQuadra("Quadra Disponível", "Tênis");

        expect(
            verificarDisponibilidade(quadra, "28/10/2026", "10:00")
        ).toBe(true);
    });
});
