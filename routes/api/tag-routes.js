const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const tagData= await Tag.findAll({ // find all tags
      include: [{ model: Product }],
    });
    res.status(200).json(tagData); // returns status 200 and tag data
  } catch (err) {
    res.status(500).json(err); // returns status 500 and error if any.
  }
});

router.get('/:id',async (req, res) => {
  try{
    const tagsData = await Tag.findByPk(req.params.id, { // find a single tag by its `id` by using findByPk method
    });
    res.status(200).json(tagsData); // returns status 200 and tag data
  } catch (err) {
    res.status(500).json(err); // returns status 500 and error if any.
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const tagData = await Tag.create(req.body); // creates a new tag using create method
    res.status(200).json(tagData); // returns status 200 and tag data
  } catch (err) {
    res.status(500).json(err); // returns status 500 and error if any.
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
try{
  const tagData = await Tag.update(req.body, { // updates a tag's name using update method
    where: {
      id: req.params.id, // where specifies the id of the tag 
    },
  });
  res.status(200).json(tagData); // returns status 200 and tag data
} catch (err) {
  res.status(500).json(err); // returns status 500 and error if any.
}
});

router.delete('/:id', async (req, res) => { // delete on tag by its `id` value
  try{
    const tagData = await Tag.destroy({ // deletes a tag using destroy method
      where: {
        id: req.params.id // where specifies the id of the tag
      }
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
