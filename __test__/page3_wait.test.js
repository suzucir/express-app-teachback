jest.setTimeout(30000);
describe('Time test', () => {
    test('Timed test #4', async () => {
        const foo = true;
        await new Promise((r) => setTimeout(r, 20000));
        expect(foo).toBeDefined();
      });
})