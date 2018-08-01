////// FUNCTIONS ///////
const listInterests = interestsArr =>
  interestsArr.forEach(interest => console.log(`* ${interest}`));

const displayPosition = (companyName, jobTitle, description) => {
  console.log(`* ${jobTitle} at ${companyName} - ${description}`);
};

const listPrevExperience = expArr => {
  expArr.forEach(exp =>
    displayPosition(exp.companyName, exp.jobTitle, exp.description)
  );
};

const displaySkill = (skillName, bool) => {
  if (bool) {
    skillName = `BAM: ${skillName}`;
  }
  console.log(`* ${skillName}`);
};

const listSkils = skillsArr =>
  skillsArr.forEach(skill => displaySkill(skill.name, skill.cool));

///// LISTS / ARRAYS /////
const interests = [
  "Soccer",
  "Programming",
  "Marvel",
  "Watching Anime",
  "Learning"
];

const prevExperience = [
  {
    companyName: "United States Air Force",
    jobTitle: "Air Passenger/Frieght Supervisor",
    description:
      "Loaded passengers and frieght for air transport to global destinations"
  },
  {
    companyName: "Cafe Kaila",
    jobTitle: "Server",
    description:
      "Served local and national guests in a fast paced breakfast restaurant"
  },
  {
    companyName: "Shokudo Japanese Restaurant",
    jobTitle: "Server",
    description:
      "Served ethnic cuisine to local guests in an upscale Japanese restaurant"
  }
];

const skills = [
  { name: "Communications", cool: false },
  { name: "Piano", cool: false },
  { name: "Math", cool: false },
  { name: "Soccer", cool: true },
  { name: "React JS", cool: true },
  { name: "PostgreSQL", cool: false },
  { name: "CSS Grid", cool: true },
  { name: "Express JS", cool: false }
];

////// CONSOLE.LOG  RESUME////////
console.log(`Name: ${"Steven Inouye".toUpperCase()}`);
console.log(`Career: Full Stack Engineer`);
console.log(`Description: Superman is the greatest hero of all time`);
console.log(` `);
console.log("My Interests:");
listInterests(interests);
console.log(" ");
console.log("My Previous experience:");
listPrevExperience(prevExperience);
listSkils(skills);
