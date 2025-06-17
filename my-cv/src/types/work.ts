export interface IWorkState {
  experience: IWork[];
}

export interface IWork {
  icon: string;
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  from: string;
  to: string;
  description: string;
  period: string;
}
