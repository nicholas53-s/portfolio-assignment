export interface Skill {
  name: string;
  percentage: number;
  icon: string; // path ke SVG di /public
}

export const skills: Skill[] = [
  { name: 'HTML', percentage: 90, icon: '/html.png' },
  { name: 'CSS', percentage: 90, icon: '/css.png' },
  { name: 'Javascript', percentage: 90, icon: '/js.png' },
  { name: 'React JS', percentage: 90, icon: '/react.png' },
  { name: 'Mongo DB', percentage: 90, icon: '/mongoDB.png' },
  { name: 'Docker', percentage: 90, icon: '/docker.png' },
  { name: 'Express JS', percentage: 90, icon: '/express-js.png' },
  { name: 'PostgreSQL', percentage: 90, icon: '/postgre.png' },
];
