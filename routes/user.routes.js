const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');
const { validateRegister, validateCode } = require('../middleware/validators.middleware');
const { validateLogin } = require('../middleware/validators.middleware');
const { validatePersonalData } = require('../middleware/validators.middleware');
const { validateCompanyData } = require('../middleware/validators.middleware');
const upload = require('../middleware/upload.middleware');

router.post('/register', validateRegister, userController.register);
router.post('/validate', auth, validateCode, userController.validateEmail);
router.post('/login', validateLogin, userController.login);
router.put('/register', auth, validatePersonalData, userController.updatePersonalData);
router.patch('/company', auth, validateCompanyData, userController.updateCompanyData);
router.patch('/logo', auth, upload.single('logo'), userController.updateLogo);
router.get('/', auth, userController.getUser);
router.delete('/', auth, userController.deleteUser);

module.exports = router;
