/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nsyrsllnjoihfz1")

  collection.listRule = null
  collection.viewRule = "hero.player.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nsyrsllnjoihfz1")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
