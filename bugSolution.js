```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {
    $match: { /* some criteria */ }
  },
  {
    $lookup: {
      from: "otherCollection",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocuments"
    }
  },
  {
    $group: {
      _id: "$_id",
      relatedDocuments: {
        $push: "$relatedDocuments"
      }
    }
  }
]);
```