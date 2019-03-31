import { Section, SECTIONPROJETS, SECTIONFORMATIONS, SECTIONEXPERIENCES } from "./section";

export class Partie {
  titre: string;
  sections: Section[];
}

export const SECTIONPARTIES: Partie[] = [
	{
    titre: "projets",
		sections: SECTIONPROJETS
	},
	{
    titre: "formations",
		sections: SECTIONFORMATIONS
  },
	{
    titre: "experiences",
		sections: SECTIONEXPERIENCES
  }
];
