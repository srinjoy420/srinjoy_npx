#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resumePath = path.join(__dirname, "resume.json");
const resume = JSON.parse(fs.readFileSync(resumePath, "utf-8"));

console.log("=======================================");
console.log(`${resume.name} — ${resume.title}`);
console.log("=======================================");
console.log(`📧  Email: ${resume.contact.email}`);
console.log(`📞  Phone: ${resume.contact.phone}`);
console.log(`🔗  GitHub: ${resume.contact.github}`);
console.log(`🔗  LinkedIn: ${resume.contact.linkedin}`);
console.log("\nProjects:");
resume.projects.forEach((p, i) => {
  console.log(`\n ${i + 1}. ${p.name}`);
  console.log(`    Tech: ${p.tech_stack.join(", ")}`);
  console.log(`    Repo: ${p.source_code}`);
  p.highlights.forEach(h => console.log(`    - ${h}`));
});
console.log("\nSkills:");
console.log("   Languages:", resume.technical_skills.languages.join(", "));
console.log("   Frontend:", resume.technical_skills.frontend.join(", "));
console.log("   Backend:", resume.technical_skills.backend.join(", "));
console.log("   Databases:", resume.technical_skills.databases.join(", "));
console.log("   Tools:", resume.technical_skills.tools.join(", "));

console.log("\nEducation:");
resume.education.forEach(e => {
  console.log(`   ${e.degree}, ${e.institution} (${e.duration})`);
});
console.log("=======================================");
