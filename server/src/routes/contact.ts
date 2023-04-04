import express from "express";
import {
  CreateNewContact,
  DeleteContact,
  GetAllContacts,
  GetContactById,
} from "../controller/ContactController";

const router = express.Router();

router.route("/contacts/all").get(GetAllContacts);
router.route("/contact/new").post(CreateNewContact);

router.route("/contact/:id").get(GetContactById).delete(DeleteContact);

export default router;
