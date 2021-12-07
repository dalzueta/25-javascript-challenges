describe("Store search module should", () => {
  const sut = require("../exercises/07_store_search");
  it("return true when the object is found", () => {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
      estanteria2: {
        cajon1: "vacio",
        cajon2: {
          producto1: "pantalones",
          producto2: "camiseta", // <- ¡Está aquí!
        },
      },
    };

    expect(sut(almacen, "camiseta")).toBe(true);
  });

  it("return false when the object is dont found", () => {
    const almacen = {
      baul: {
        fondo: {
          objeto: "cd-rom",
          "otro-objeto": "disquette",
          "otra-cosa": "mando",
        },
      },
    };

    expect(sut(almacen, "gameboy")).toBe(false);
  });

  it("more deep store should return true when the object is found", () => {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
      estanteria2: {
        cajon1: "vacio",
        cajon2: {
          cajon3: { producto4: "pantalones" }, // <- ¡Está aquí!
          producto2: "camiseta",
        },
      },
    };

    expect(sut(almacen, "pantalones")).toBe(true);
  });

  it("store with 10 levels should return true when the object is found", () => {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
      estanteria2: {
        cajon1: "vacio",
        cajon2: {
          cajon3: {
            producto4: "pantalones3",
            cajon4: {
              cajon5: {
                cajon6: {
                  cajon7: {
                    producto5: "pantalones4",
                    cajon8: {
                      producto6: "ravioles", // <- ¡Está aquí!
                    },
                  },
                  producto7: "pantalones33",
                },
                producto8: "pantalones22",
              },
              producto9: "pantalones11",
            },
          },
          producto2: "camiseta",
        },
      },
    };

    expect(sut(almacen, "ravioles")).toBe(true);
  });
});
