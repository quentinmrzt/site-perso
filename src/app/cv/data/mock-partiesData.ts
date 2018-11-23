import { PartieData } from './partieData';

import { SECTIONPROJETS } from "./mock-sectionProjets";
import { SECTIONFORMATIONS } from "./mock-sectionFormations";
import { SECTIONEXPERIENCES } from "./mock-sectionExperiences";
import { SECTIONCOMPETENCES } from "./mock-sectionCompetences";

export const SECTIONPARTIESDATA: PartieData[] = [
	{
    titre: "Projets",
		sections: SECTIONPROJETS
	},
	{
    titre: "Formations",
		sections: SECTIONFORMATIONS
  },
	{
    titre: "Expériences",
		sections: SECTIONEXPERIENCES
  },
	{
		titre: "Compétences",
		sections: SECTIONCOMPETENCES
	}
];
