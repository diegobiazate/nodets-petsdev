import { Router } from "express";
import * as HomeController from '../controllers/homeController';
import * as SearchController from '../controllers/searchController';


const router = Router();

router.get("/", HomeController.home);
router.get("/dogs", HomeController.dogs);
router.get("/cats", HomeController.cats);
router.get("/fishes", HomeController.fishes);

router.get('/search', SearchController.search);

export default router;