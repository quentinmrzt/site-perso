import { PartieData } from './partieData';

import { SECTIONPROJETS } from "./mock-sectionProjets";
import { SECTIONFORMATIONS } from "./mock-sectionFormations";
import { SECTIONEXPERIENCES } from "./mock-sectionExperiences";
import { SECTIONCOMPETENCES } from "./mock-sectionCompetences";

export const SECTIONPARTIESDATA: PartieData[] = [
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
  },
	{
		titre: "competences",
		sections: SECTIONCOMPETENCES
	}
];
