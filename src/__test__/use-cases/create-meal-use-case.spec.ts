import { describe, expect, it } from 'vitest';
import { makeCreateMealUseCase } from '../../domain/user/applications/use-case/factories/make-create-meal-use-case';

describe('testando caso de uso: criar nova refeição',()=>{
    let sut = makeCreateMealUseCase()
    const name = 'Nome da Refeição';
    const description = 'Descrição da Refeição';
    const mealTime = '12/03/2022'
    const isOnTheDiet = true
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMxZGJkM2UwLTQxMjctNDVmNS1iZTdiLTBlNjQ0MzcyMjYwNCIsIm5hbWUiOiJVc2VyIDMiLCJlbWFpbCI6InVzZXIxQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE1MTk2MDMxfQ.os0_YchsPYOBylig9UH5blTP7yAGImr9L8Z84WHUydw'
    
    it('deve retornar erro ao ter um token invalido',async()=>{
       await expect(sut.execute(name, description, mealTime, isOnTheDiet,'-')).rejects.toThrow('Invalid token');
    })
    it('deve  salvar um usuario com sucesso',async()=>{
        const res = await sut.execute(name, description, mealTime, isOnTheDiet,token)
        expect(res).toHaveProperty('id',res.toValeu())
        await expect(sut.execute(name, description, mealTime, isOnTheDiet, token)).resolves.not.toThrow();
    })
})