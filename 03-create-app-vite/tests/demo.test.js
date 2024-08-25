describe("Pruebas en <DemoComponent/>", () =>{
    test('Esta prueba no debe de falla', () => {
        // Las pruebas cuentan con tres pasos especificios
        // 1. Inicializacion
        const message1 = "Hola mundo";
        // 2. Estimulo (la accion a ejecutar)
        // El metodo trim sirve para eliminar los espacios en blanco de el inicio y el final de un string
        const message2 = message1.trim();
        // 3. Observar el comportamiento.
        // Podemos usar un If para comparar pero es muy tedioso. Mejor usar los metodos que jest ofrece: expect() que sirve para recibir y .toBe() para la salida
        expect(message1).toBe(message2);
    })
})

