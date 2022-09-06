const PetController = require("../controllers/pet.controller")

function petsRoutes(app)
{
    app.post("/api/pets/new", PetController.createPet)
    app.get("/api/pets", PetController.getAllPets)
    app.put("/api/pets/:id/edit", PetController.updatePet)
    app.delete("/api/pets/:id/delete", PetController.deletePet)
    app.get("/api/pets/:id", PetController.OnePet)
}

module.exports = petsRoutes