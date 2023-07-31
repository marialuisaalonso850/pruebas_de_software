const busqueda = require("./busqueda");

test(" el resultado es false ",()=>{
    expect(busqueda("juan")).toBe("entre");
});