const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

const productRoutes = require("./product.routes")
router.use("/product", productRoutes)

const userRoutes = require("./user.routes")
router.use("/user", userRoutes)

module.exports = router;