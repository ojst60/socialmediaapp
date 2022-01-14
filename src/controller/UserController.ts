import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

export class UserController {
  static newUser = async (req: Request, res: Response) => {
    const user = new User();

    const userRepository = getRepository(User);

    if (req.body) {
      const {
        firstName,
        lastName,
        userName,
        password,
        age,
        dateOfBirth,
        address,
        country,
        aboutMe,
        profilePicture,
        email,
      } = req.body;

      user.firstName = firstName;
      user.password = password;
      user.lastName = lastName;
      user.userName = userName;
      user.age = age;
      user.dateOfBirth = dateOfBirth;
      user.address = address;
      user.country = country;
      user.aboutMe = aboutMe;
      user.profilePicture = profilePicture;
      user.email = email;
    } else {
      res.status(400);
      return;
    }

    const result = await userRepository.save(user);
    res.send(result);
  };
}
