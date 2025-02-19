import Form from "@/models/Form";
import APIError from "@/utils/error";
import type { IForm } from "@/types";

class FormService {

  async createForm(data: IForm) {

    const { name, description } = data;

    if (!name || !description) {
      throw new APIError(
        "Name and description are required",
        400
      );
    }

    const form = await Form.insertOne(data); 

    return form;

  }

  async getForm (id: string) {

    const form = await Form.findById(id);

    return form;

  }

  async getForms () {

    const forms = await Form.find();

    return forms;

  }

}

const formService = new FormService();

export default formService;