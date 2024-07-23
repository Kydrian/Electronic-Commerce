const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => { // get one category by its `id` value
  try{
    const categoryData = await Category.findByPk(req.params.id, { //findbyPk method is used to find a single category by its `id` value
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => { // post create a new category
  try{
    const categoryData = await Category.create(req.body); // creates a new category using create method
    res.status(200).json(categoryData); // returns status 200 and category data
  } catch (err) {
    res.status(500).json(err); // returns status 500 and error if any.
  }
});

router.put('/:id', async (req, res) => { // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, { // updates a category using update method
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => { // delete on category by its `id` value
  try {
    // delete a category by its `id` value
    const result = await Category.destroy({ // deletes a category using destroy method
      where: {
        id: req.params.id,
      },
    });

    if (result) {
      res.status(200).json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ message: 'No category found with this id' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
 

module.exports = router;
