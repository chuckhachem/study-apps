import { useState, useEffect } from "react";

/* ============================================================
   FOUNDATIONS — chemistry & physics from zero to tutor-level
   Each lesson: thesis → teaching sections → mnemonic →
   common error → how to teach it → mastery-gated practice
   ============================================================ */

const C = {
  chem: {
    name: "Chemistry",
    units: [
      {
        name: "Foundations",
        lessons: [
          {
            id: "c1a",
            title: "What is matter?",
            idea: "Chemistry is the study of what stuff is made of and how it rearranges. Everything begins with defining 'stuff'.",
            sections: [
              {
                h: "The definition, and why it is worded that way",
                p: "Matter is anything that has mass and occupies volume. Both halves matter. Mass is the amount of substance present — the thing that resists being pushed. Volume is the space it claims, space no other matter can occupy at the same time. Light has energy and even momentum, but it has no rest mass and two beams pass straight through each other; that is precisely why light is not matter. Heat and sound are likewise processes happening to matter, not matter itself. Beginners think 'matter = things I can touch'. The professional definition is sharper: mass plus exclusive occupancy of space.",
              },
              {
                h: "The three states, explained by particle behavior",
                p: "Do not memorize the states as a list — derive them from how much freedom the particles have. In a solid, particles are locked in fixed positions and only vibrate, so a solid keeps both its shape and its volume. In a liquid, particles touch but slide past one another, so volume is fixed but shape is not — it pours into whatever holds it. In a gas, particles are far apart and move independently, so neither shape nor volume is fixed; a gas expands to fill any container and can be compressed because it is mostly empty space. Every property follows from that one variable: freedom of movement.",
              },
              {
                h: "Pure substances versus mixtures",
                p: "A pure substance has one uniform composition throughout and fixed properties — pure water always boils at 100 °C at sea level. A mixture contains two or more substances physically intermingled but not chemically joined; its composition can vary, and its components can be separated by physical means such as filtering, evaporating, or distilling. Salt water is a mixture: no new substance was made, and boiling the water off returns the salt unchanged. This is the first appearance of the deepest distinction in chemistry — physical change (arrangement altered, identity preserved) versus chemical change (identity itself altered).",
              },
            ],
            mnemonic: "Matter ← Latin materia, 'material, timber' — the raw stock the universe is built from. If you could in principle put it in a bag and weigh the bag, it is matter.",
            pitfall: "Calling air 'not matter' because it is invisible. Invisibility is irrelevant — a sealed balloon of air weighs measurably more than an empty one.",
            tutor: "Ask your student to justify each state from particle freedom instead of reciting it. If they can tell you why a gas is compressible but a liquid is not, they own the concept rather than the list.",
            qs: [
              { q: "Which of these is matter?", opts: ["Light", "Heat", "Air", "Sound"], a: 2, why: "Air has mass and occupies space — a sealed balloon of air weighs more than a flat one. Light, heat, and sound are forms of energy: they transfer through matter but have no rest mass and claim no exclusive volume." },
              { q: "Which state has a fixed shape AND a fixed volume?", opts: ["Gas", "Liquid", "Solid", "None"], a: 2, why: "In a solid, particles are fixed in place and only vibrate, so both shape and volume are locked. Liquids keep volume but not shape (particles slide); gases keep neither (particles fly free)." },
              { q: "Salt water is best classified as a…", opts: ["Pure substance", "Mixture", "Element", "Compound"], a: 1, why: "The salt and water are physically intermingled, not chemically bonded. The proof: evaporate the water and the salt returns unchanged, and the salt concentration can be varied at will. Both are hallmarks of a mixture." },
              { q: "Gases can be compressed far more easily than liquids because…", opts: ["Gas particles are smaller", "Gas particles are mostly empty space apart", "Gases are lighter", "Gases have no mass"], a: 1, why: "Compression means pushing particles closer. In a gas the particles are already far apart, so there is room to close. In a liquid they are already touching — there is almost nothing left to squeeze out." },
              { q: "Dissolving sugar in tea is a…", opts: ["Chemical change", "Physical change", "Nuclear change", "New compound forming"], a: 1, why: "The sugar molecules disperse among water molecules but remain sugar — evaporate the water and sugar crystals return. No chemical identity changed, so it is a physical change." },
            ],
          },
          {
            id: "c1b",
            title: "Atoms, elements, compounds",
            idea: "All matter reduces to about a hundred kinds of atom. Everything else is combination.",
            sections: [
              {
                h: "The atom as the unit of identity",
                p: "An atom is the smallest particle of an element that still has that element's chemical identity. Split a gold atom and you no longer have gold — you have subatomic debris. This is the atomic hypothesis, and Richard Feynman argued that if all scientific knowledge were destroyed and one sentence could be passed on, it should be that all things are made of atoms in perpetual motion, attracting at short distance and repelling when squeezed together. Almost every fact in chemistry is a consequence of that sentence.",
              },
              {
                h: "Element, compound, mixture — a strict hierarchy",
                p: "An element contains only one kind of atom: oxygen, iron, sodium. A compound contains two or more kinds of atom chemically bonded in a fixed whole-number ratio: water is always two hydrogens to one oxygen, never 2.3. That fixed ratio is the law of definite proportions, and it is the fingerprint of a compound. A mixture has no fixed ratio at all. So the ladder runs: atom → element → compound → mixture, with the chemical bond as the rung between compound and mixture.",
              },
              {
                h: "Molecules of elements versus molecules of compounds",
                p: "A common trap: O₂ is a molecule, but it is not a compound. A molecule is simply two or more atoms bonded together; a compound requires that those atoms be of different elements. Oxygen gas, O₂, contains only oxygen atoms, so it remains an element that happens to travel in pairs. Seven elements do this in nature — H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂ — and they are called diatomic. Keeping 'molecule' and 'compound' distinct prevents a great deal of later confusion.",
              },
              {
                h: "Symbols and where they come from",
                p: "Each element has a one- or two-letter symbol, the first letter always capitalized and the second never. Several symbols come from Latin rather than English, which is why they look unrelated to the name: sodium is Na (natrium), potassium is K (kalium), iron is Fe (ferrum), lead is Pb (plumbum), gold is Au (aurum), silver is Ag (argentum). Learning the Latin roots turns arbitrary memorization into etymology you cannot easily forget — a plumber works with lead pipes; something aurous is golden.",
              },
            ],
            mnemonic: "Pb = plumbum → plumber → lead pipes. Au = aurum → 'aura' of gold. Fe = ferrum → ferry made of iron. K = kalium → 'kale' is rich in potassium.",
            pitfall: "Calling O₂ a compound. Molecule ≠ compound: a compound needs at least two different elements.",
            tutor: "Give the student a list — He, H₂O, O₂, air, brass, CO₂ — and ask them to sort it into element / compound / mixture, then justify each. Misplacements reveal exactly which boundary they have not internalized.",
            qs: [
              { q: "The smallest particle that retains an element's identity is the…", opts: ["Molecule", "Compound", "Atom", "Electron"], a: 2, why: "The atom is the unit of chemical identity. Go smaller — to protons, neutrons, electrons — and the identity of the element is gone; you have generic subatomic particles." },
              { q: "O₂ is correctly described as…", opts: ["A compound", "A molecule of an element", "A mixture", "An ion"], a: 1, why: "It is a molecule (two atoms bonded), but both atoms are oxygen. A compound requires two or more DIFFERENT elements, so O₂ is still an element — a diatomic one." },
              { q: "Water is always 2 hydrogen to 1 oxygen. This illustrates…", opts: ["The law of definite proportions", "The octet rule", "Conservation of mass", "Avogadro's law"], a: 0, why: "A compound has a fixed whole-number ratio of atoms — that is the law of definite proportions, and it is precisely what distinguishes a compound from a mixture, whose proportions can vary freely." },
              { q: "The symbol Pb stands for…", opts: ["Phosphorus", "Potassium", "Lead", "Platinum"], a: 2, why: "Pb comes from the Latin plumbum, the same root as 'plumber' — Roman plumbing used lead pipes. Phosphorus is P, potassium is K (kalium), platinum is Pt." },
              { q: "Which is a compound?", opts: ["Air", "N₂", "NaCl", "Brass"], a: 2, why: "NaCl has two different elements chemically bonded in a fixed 1:1 ratio. Air and brass are mixtures with variable composition; N₂ is a diatomic element." },
            ],
          },
          {
            id: "c1c",
            title: "Units, prefixes, density",
            idea: "A number without a unit is meaningless. Unit tracking is the single most reliable error-checker in science.",
            sections: [
              {
                h: "The SI base units",
                p: "Science standardizes on seven base units; four concern you now. Length is the meter (m), mass is the kilogram (kg), time is the second (s), and amount of substance is the mole (mol). Note the oddity worth remembering: the kilogram, not the gram, is the base unit of mass — it is the only base unit that already carries a prefix, for historical reasons. Every other unit you will meet is derived by combining these: speed is m/s, force is kg·m/s², density is kg/m³.",
              },
              {
                h: "Prefixes as multiplication",
                p: "A prefix is not a new unit; it is a multiplier glued to a unit. kilo- means ×1000, centi- means ÷100, milli- means ÷1000, micro- means ÷1,000,000, nano- means ÷1,000,000,000. So 1 km = 1000 m, 1 cm = 0.01 m, 1 mg = 0.001 g. Converting is therefore never a matter of guessing whether to multiply or divide: write the prefix as its number and the arithmetic answers itself.",
              },
              {
                h: "Dimensional analysis — the professional's method",
                p: "To convert, multiply by a fraction equal to 1 whose units cancel. To turn 2500 mL into liters, multiply by (1 L / 1000 mL): the mL cancel top and bottom, leaving 2.5 L. This looks pedantic on easy problems and becomes indispensable on hard ones. It also gives you a free error check: if your final units are wrong, your setup is wrong, no matter how clean the arithmetic looked. Physicists and chemists trust unit cancellation more than they trust their own algebra.",
              },
              {
                h: "Density, the first derived quantity",
                p: "Density = mass ÷ volume, usually g/cm³ or kg/m³. It answers 'how much matter is packed into each unit of space', which is why it — not weight — determines whether something floats. A block of lead and a block of styrofoam of equal volume differ enormously in mass; a ton of feathers and a ton of lead have equal mass but wildly unequal volume. Density is the quantity that reconciles the two, and water's value of 1.00 g/cm³ makes it the natural reference point.",
              },
            ],
            mnemonic: "milli sounds like 'mini' → a thousandth. kilo → a kilo of rice → a thousand grams. centi → 'century' → a hundred → a hundredth of a meter.",
            pitfall: "Multiplying when you should divide during conversions. Cure: always write the conversion as a fraction and cancel the units on paper.",
            tutor: "Insist your student writes units on every line, including intermediate steps. Most wrong answers announce themselves as wrong units long before the final number.",
            qs: [
              { q: "The SI base unit of mass is the…", opts: ["Gram", "Pound", "Kilogram", "Newton"], a: 2, why: "The kilogram — uniquely, the only base unit that already contains a prefix, a historical accident. The gram is a derived convenience; the newton is a unit of force, not mass." },
              { q: "2500 mL equals…", opts: ["25 L", "2.5 L", "0.25 L", "250 L"], a: 1, why: "Multiply by (1 L / 1000 mL): the mL cancel, giving 2500 ÷ 1000 = 2.5 L. Setting it up as a fraction removes any doubt about which way to divide." },
              { q: "A block has mass 40 g and volume 8 cm³. Its density is…", opts: ["320 g/cm³", "5 g/cm³", "0.2 g/cm³", "48 g/cm³"], a: 1, why: "Density = mass ÷ volume = 40 ÷ 8 = 5 g/cm³. The units confirm the setup: grams divided by cubic centimeters yields g/cm³." },
              { q: "Which will float in water (density 1.0 g/cm³)?", opts: ["A dense object of small mass", "An object of density 0.8 g/cm³", "Any light object", "An object of density 2.7 g/cm³"], a: 1, why: "Floating depends on density relative to the fluid, never on mass alone. At 0.8 g/cm³ the object is less dense than water and floats; a battleship floats despite enormous mass because its average density is low." },
              { q: "The chief practical value of dimensional analysis is that…", opts: ["It is faster", "Wrong final units expose a wrong setup", "It avoids decimals", "It replaces algebra"], a: 1, why: "Units cancel mechanically, so an incorrect arrangement produces visibly nonsensical units — an error check that runs automatically, before you ever check the arithmetic." },
            ],
          },
        ],
      },
      {
        name: "Atomic structure",
        lessons: [
          {
            id: "c2a",
            title: "Inside the atom",
            idea: "An atom is a tiny dense positive nucleus surrounded by a vast, nearly empty cloud of electrons.",
            sections: [
              {
                h: "The three particles",
                p: "The proton carries charge +1 and mass ≈ 1 atomic mass unit (amu). The neutron carries no charge and mass ≈ 1 amu. The electron carries charge −1 and a mass of roughly 1/1836 amu — negligible for practical purposes. Protons and neutrons together are called nucleons because they live in the nucleus; electrons occupy the surrounding space. Charges are equal and opposite in magnitude, which is why a neutral atom simply has equal numbers of protons and electrons.",
              },
              {
                h: "Rutherford's experiment and why it mattered",
                p: "In 1909 alpha particles were fired at gold foil. Most sailed straight through, but a very few bounced almost backward — in Rutherford's phrase, as astonishing as a shell rebounding from tissue paper. The only explanation was that an atom's positive charge and nearly all its mass are concentrated in a minute central nucleus, with the rest essentially empty. Scale it up: if the nucleus were a marble on the center circle of a football stadium, the electrons would be dust motes drifting at the top of the stands.",
              },
              {
                h: "Where mass lives and where chemistry happens",
                p: "Hold two facts together, because nearly all of chemistry hangs on them. First, almost all the mass is in the nucleus, since nucleons outweigh electrons by a factor of roughly 1800. Second, essentially all chemical behavior comes from the electrons, specifically the outermost ones, because those are the only parts of an atom that ever meet another atom. Mass is a nuclear property; reactivity is an electronic property. Bonding, acidity, color, and conductivity are all electron stories.",
              },
              {
                h: "Why the electrons stay",
                p: "Opposite charges attract, so the negative electrons are held by the positive nucleus through the electrostatic (Coulomb) force. That attraction weakens with distance, which is why outer electrons are held loosely and can be lost or shared, while inner electrons are gripped tightly and never participate. That single idea — attraction falling off with distance — will later explain atomic size, ionization energy, and every periodic trend you meet.",
              },
            ],
            mnemonic: "Proton = Positive (matching P's). Neutron = Neutral. Electron = 'electric minus'. Nucleons = the ones in the nucleus.",
            pitfall: "Picturing electrons in neat planetary orbits. They occupy probability clouds — regions where the electron is likely to be found — not tracks.",
            tutor: "Lead with the stadium-and-marble scale model. Once a student truly feels that an atom is overwhelmingly empty, the rest of atomic structure stops feeling arbitrary.",
            qs: [
              { q: "Which particle has charge −1?", opts: ["Proton", "Neutron", "Electron", "Nucleon"], a: 2, why: "The electron. Proton is +1, neutron is 0. Charges on proton and electron are equal in size and opposite in sign, which is why a neutral atom has equal counts of each." },
              { q: "Nearly all of an atom's mass resides in…", opts: ["The electron cloud", "The nucleus", "Empty space", "The outer shell"], a: 1, why: "Protons and neutrons each weigh about 1 amu, roughly 1800 times an electron. Since both live in the nucleus, the nucleus holds virtually the entire mass in a minute fraction of the volume." },
              { q: "Rutherford's gold-foil result — a few alpha particles rebounding — showed that…", opts: ["Atoms are solid spheres", "Positive charge is concentrated in a tiny nucleus", "Electrons are heavy", "Atoms are neutral"], a: 1, why: "A rebound requires a hard, concentrated positive target. Most particles passing straight through showed the atom is mostly empty; the rare violent deflections revealed a dense central nucleus." },
              { q: "Chemical behavior is determined mainly by…", opts: ["Neutrons", "The nucleus", "Outer electrons", "Total mass"], a: 2, why: "Only the outermost electrons ever contact another atom, so they alone govern bonding and reactivity. The nucleus dictates mass and identity but takes no part in chemical reactions." },
              { q: "Electrons remain bound to the atom because of…", opts: ["Gravity", "Electrostatic attraction to the nucleus", "Magnetism", "Neutron pressure"], a: 1, why: "Opposite charges attract via the Coulomb force. Gravity between such tiny masses is negligible — smaller by roughly forty orders of magnitude." },
            ],
          },
          {
            id: "c2b",
            title: "Atomic number & mass number",
            idea: "Two integers describe any atom completely: how many protons it has, and how many nucleons in total.",
            sections: [
              {
                h: "Atomic number Z — the identity card",
                p: "The atomic number Z is the number of protons, and it alone determines which element an atom is. Six protons is carbon, always and everywhere — in a diamond, in your bloodstream, in a distant star. Add one proton and you have nitrogen, a wholly different element. This is why the periodic table is ordered by Z and not by mass: proton count is identity, and no other quantity is. Alchemy failed because changing Z requires nuclear, not chemical, means.",
              },
              {
                h: "Mass number A, and the arithmetic",
                p: "The mass number A counts nucleons: A = protons + neutrons. Electrons are omitted because their mass is negligible. From these two numbers everything else follows by subtraction: neutrons = A − Z, and for a neutral atom, electrons = Z. Notation places them around the symbol, with A on top and Z on the bottom: ²³₁₁Na means 11 protons, 23 nucleons, and therefore 12 neutrons.",
              },
              {
                h: "Reading the periodic table correctly",
                p: "Each box shows a whole number (Z) and a decimal number (the relative atomic mass). Carbon reads 6 and 12.011. The whole number is exact — protons come only in integers. The decimal is a weighted average across the element's naturally occurring isotopes, which is why it is almost never a round number. Confusing the two is the most common early error: Z is counted, atomic mass is averaged.",
              },
              {
                h: "Why the average is weighted",
                p: "Chlorine's mass appears as 35.45, sitting between its isotopes chlorine-35 and chlorine-37. That value is not a midpoint — it is weighted by natural abundance, and because roughly three-quarters of chlorine is Cl-35, the average sits much nearer 35 than 37. Reasoning backward is a genuinely useful skill: if an element's average mass lies close to one isotope, that isotope must be the abundant one.",
              },
            ],
            mnemonic: "Z is for 'Zee identity' — change Z, change the element. A is for 'All the heavy bits' — protons plus neutrons.",
            pitfall: "Treating the decimal atomic mass as a neutron count. Round it to the nearest whole number to estimate A, then subtract Z for neutrons.",
            tutor: "Drill the triangle: given any two of Z, A, and neutrons, produce the third. Ten seconds per item, out loud, until it is automatic — this arithmetic underlies isotopes, ions, and nuclear chemistry alike.",
            qs: [
              { q: "What determines which element an atom is?", opts: ["Neutron count", "Electron count", "Proton count", "Mass number"], a: 2, why: "The proton count Z is identity itself. Neutrons vary among isotopes and electrons vary among ions, yet the element remains the same; change a proton and the element changes." },
              { q: "An atom with A = 23 and Z = 11 has how many neutrons?", opts: ["11", "12", "23", "34"], a: 1, why: "Neutrons = A − Z = 23 − 11 = 12. Mass number counts all nucleons, so subtracting the protons leaves the neutrons." },
              { q: "Carbon's box reads 6 and 12.011. The 12.011 is…", opts: ["The neutron count", "A weighted average of isotope masses", "The electron count", "An error"], a: 1, why: "It is the relative atomic mass, averaged across natural isotopes and weighted by abundance. Only the whole number 6 (the proton count) is exact — atoms cannot hold fractional protons." },
              { q: "A neutral atom has 17 protons. Its electron count is…", opts: ["16", "17", "18", "35"], a: 1, why: "Neutral means total charge zero, so the +1 protons must be matched one-for-one by −1 electrons: 17." },
              { q: "Chlorine's average mass is 35.45, between Cl-35 and Cl-37. This implies…", opts: ["Equal amounts of each", "Cl-35 is far more abundant", "Cl-37 is more abundant", "Nothing about abundance"], a: 1, why: "A weighted average is pulled toward the more abundant isotope. Sitting near 35 rather than midway at 36 shows Cl-35 dominates — in fact about 75% of natural chlorine." },
            ],
          },
          {
            id: "c2c",
            title: "Isotopes & ions",
            idea: "Vary the neutrons and you change mass, not chemistry. Vary the electrons and you change charge and chemistry, not identity.",
            sections: [
              {
                h: "Isotopes: same element, different mass",
                p: "Isotopes are atoms of the same element — identical Z — with different neutron counts and therefore different A. Carbon-12 and carbon-14 both have 6 protons; the first has 6 neutrons, the second 8. Because chemistry is governed by electrons and electron count follows proton count, isotopes are chemically nearly identical. They differ in mass and in nuclear stability, which is what makes carbon-14 radioactive and thus useful for dating, while carbon-12 is stable.",
              },
              {
                h: "Ions: same element, different charge",
                p: "An ion is an atom that has gained or lost electrons. Losing electrons leaves an excess of protons and a positive charge — a cation. Gaining electrons produces a negative charge — an anion. Two rules prevent nearly all beginner errors. First, protons never change in ordinary chemistry; only electrons move. Second, the sign follows what was lost or gained: lose the negative particle and what remains is positive.",
              },
              {
                h: "Computing electron counts in ions",
                p: "Take Na⁺ with Z = 11. The +1 means one electron was lost, so electrons = 11 − 1 = 10. Take O²⁻ with Z = 8: gaining two electrons gives 8 + 2 = 10. Notice that both now have 10 electrons, matching neon — this is the octet rule at work, and it explains why sodium reliably forms +1 while oxygen reliably forms −2. Charge is not arbitrary; it is whatever gets that atom to a full outer shell.",
              },
              {
                h: "Why ions matter beyond the exam",
                p: "Ions are not an abstraction — they are the currency of physiology. Sodium and potassium ions crossing neuronal membranes generate the action potential; calcium ions trigger neurotransmitter release; lithium ions, prescribed as a mood stabilizer, are chemically similar enough to sodium to compete with it. Every electrolyte panel is an ion count. The concept you are learning here is the same one that appears in a hyponatremia workup.",
              },
            ],
            mnemonic: "caTion — the t is a plus sign (+). And a cat has 'paws-itive' charge. Anion → 'A negative ion' → An-ion.",
            pitfall: "Believing an ion forms by gaining or losing protons. Protons are locked in the nucleus; ordinary chemistry moves electrons only.",
            tutor: "Anchor ions in something the student already cares about — the sodium-potassium pump, or why lithium behaves like sodium. Abstract charge becomes memorable once it has a body to live in.",
            qs: [
              { q: "Isotopes of an element differ in their number of…", opts: ["Protons", "Electrons", "Neutrons", "Shells"], a: 2, why: "Same element means same protons by definition. What varies is the neutron count, which alters mass number and nuclear stability while leaving chemistry essentially untouched." },
              { q: "Carbon-14 and carbon-12 have nearly identical chemistry because…", opts: ["They have the same mass", "They have the same electron arrangement", "Both are radioactive", "Neutrons control bonding"], a: 1, why: "Chemistry is decided by electrons, and both isotopes have 6 protons and therefore 6 electrons arranged identically. The extra neutrons add mass and instability but do not change bonding behavior." },
              { q: "An atom loses two electrons. Its charge becomes…", opts: ["−2", "0", "+2", "+1"], a: 2, why: "Removing two negative charges leaves the protons in surplus by two, giving +2. Losing the negative particle makes what remains positive — that is a cation." },
              { q: "Na⁺ has Z = 11. How many electrons does it hold?", opts: ["10", "11", "12", "1"], a: 0, why: "The +1 signals the loss of one electron: 11 − 1 = 10. That leaves it with neon's electron count — a full outer shell, which is exactly why sodium forms this ion." },
              { q: "In ordinary chemical reactions, ions form by…", opts: ["Gaining or losing protons", "Gaining or losing neutrons", "Gaining or losing electrons", "Splitting the nucleus"], a: 2, why: "Only electrons are mobile in chemistry. Changing protons would change the element and requires nuclear processes; changing neutrons produces isotopes, not ions." },
            ],
          },
        ],
      },
      {
        name: "The periodic table",
        lessons: [
          {
            id: "c3a",
            title: "How the table is organized",
            idea: "The table is not a storage cabinet. It is a graph of electron configuration, and its shape predicts behavior.",
            sections: [
              {
                h: "Periods and groups",
                p: "Horizontal rows are periods; vertical columns are groups or families. Elements are ordered left to right by increasing atomic number, and the row breaks where an electron shell fills. That is the whole logic: period number tells you which shell the outer electrons occupy, and group number tells you how many electrons are in that outer shell. Mendeleev arranged the table before electrons were known and even left gaps for undiscovered elements — gaps later filled almost exactly as he predicted.",
              },
              {
                h: "Why groups behave alike",
                p: "Members of a group share the same number of outer-shell (valence) electrons, and since valence electrons determine reactivity, group members behave similarly. Lithium, sodium, and potassium each have one valence electron and each react violently with water in the same fashion. This is the table's real power: learn one member's behavior and you have approximately learned the column's. Memorizing 118 elements is unnecessary; understanding roughly eight columns is sufficient.",
              },
              {
                h: "Metals, nonmetals, metalloids",
                p: "Metals occupy the left and center: they conduct heat and electricity, are malleable and shiny, and tend to lose electrons. Nonmetals cluster in the upper right: poor conductors, brittle when solid, and inclined to gain electrons. Along the staircase between them sit the metalloids — boron, silicon, germanium, arsenic — with intermediate properties. Silicon's position on that border is precisely why it can be doped into a semiconductor, and thus why the electronics industry exists.",
              },
              {
                h: "Trends worth knowing now",
                p: "Two trends explain much of later chemistry. Atomic size decreases across a period, because added protons pull the same shell inward, and increases down a group, because a new shell is added each row. Electronegativity — the pull an atom exerts on shared electrons — increases across and up, peaking at fluorine. Both trends reduce to one question: how strongly does the nucleus grip the outer electrons, given distance and shielding?",
              },
            ],
            mnemonic: "Periods read across like a sentence ending in a period. Groups grow downward like family trees — same family, same behavior.",
            pitfall: "Reading the table as an arbitrary catalogue to memorize. Read it as a map of valence electrons and it becomes predictive.",
            tutor: "Cover an element's identity and give only its position. Ask the student to predict metal or nonmetal, likely ion charge, and reactivity. Position-to-prediction is the skill that separates understanding from recall.",
            qs: [
              { q: "Vertical columns of the periodic table are called…", opts: ["Periods", "Rows", "Groups", "Blocks"], a: 2, why: "Columns are groups or families; rows are periods. Group members share a valence electron count, which is why they share chemical behavior." },
              { q: "Elements in the same group behave similarly because they share…", opts: ["The same mass", "The same number of valence electrons", "The same number of neutrons", "The same density"], a: 1, why: "Reactivity is governed by outer-shell electrons. Equal valence counts mean equal bonding tendencies, so lithium, sodium, and potassium all react with water in the same characteristic way." },
              { q: "Atomic radius generally decreases across a period because…", opts: ["Electrons are removed", "Increasing nuclear charge pulls the same shell inward", "Shells are added", "Mass increases"], a: 1, why: "Moving right adds protons without adding a new shell, so the stronger positive charge draws the existing electrons closer and the atom contracts." },
              { q: "Silicon is a metalloid, which is why it can…", opts: ["Conduct like copper always", "Act as a semiconductor when doped", "Never conduct", "Form only ionic bonds"], a: 1, why: "Sitting on the metal/nonmetal staircase gives it intermediate conductivity that can be tuned by doping — the physical basis of every transistor." },
              { q: "Mendeleev's table was persuasive largely because it…", opts: ["Listed every known element", "Successfully predicted undiscovered elements", "Was ordered by mass", "Was the first table"], a: 1, why: "He left gaps and specified the properties of elements not yet found; when gallium and germanium were discovered and matched, the underlying periodic law was vindicated." },
            ],
          },
          {
            id: "c3b",
            title: "Key families & the octet rule",
            idea: "Atoms react in order to reach a full outer shell. Nearly every bond you will ever see is that one motive at work.",
            sections: [
              {
                h: "The octet rule and its logic",
                p: "Atoms are most stable with eight electrons in their outer shell — the arrangement the noble gases already possess. Reactivity is therefore best read as a distance from that goal. An atom one electron short is desperate to gain one; an atom with one spare is eager to shed it. Hydrogen and helium are the exceptions, needing only two because their single shell holds no more. Stated simply: chemistry is atoms rearranging electrons in pursuit of a full outer shell.",
              },
              {
                h: "The families worth knowing",
                p: "Group 1, the alkali metals, hold one valence electron and lose it readily, becoming +1 ions; they are so reactive they are stored under oil. Group 2, the alkaline earth metals, lose two and form +2 ions. Group 17, the halogens, are one electron short and grab greedily, forming −1 ions; fluorine is the most electronegative element known. Group 18, the noble gases, are already complete and therefore almost entirely unreactive.",
              },
              {
                h: "Predicting ion charge from position",
                p: "For the main-group elements, charge follows directly from position. Group 1 forms +1, group 2 forms +2, group 16 forms −2, group 17 forms −1. The rule of thumb: metals on the left lose their few valence electrons, while nonmetals on the right gain the few they lack, because each takes the shorter path to eight. Sodium sheds one rather than acquiring seven; chlorine acquires one rather than shedding seven.",
              },
              {
                h: "Reactivity trends within a family",
                p: "Alkali metals grow more reactive down the group, since the lone valence electron sits farther from the nucleus and is shielded by inner shells, making it easier to lose — hence potassium reacts more violently with water than sodium does. Halogens run the opposite way, growing less reactive down the group, because a distant outer shell attracts an incoming electron less strongly. Both patterns follow from the same principle: nuclear grip weakens with distance.",
              },
            ],
            mnemonic: "Octet → octopus → eight arms. Noble gases are 'noble' — self-sufficient, they refuse to mingle. Halogen ← Greek for 'salt-former' — halogens make salts with metals.",
            pitfall: "Applying the octet rule to hydrogen. Hydrogen aims for two, not eight, because its first shell holds only two.",
            tutor: "Frame every reaction as a motive: what does this atom want, and what is the cheapest route to eight? Students who ask that question can predict products instead of memorizing them.",
            qs: [
              { q: "The octet rule states that atoms tend toward…", opts: ["Two outer electrons", "Four outer electrons", "Eight outer electrons", "Zero electrons"], a: 2, why: "Eight — the noble-gas configuration. Remember the octopus's eight arms. Hydrogen and helium are the exceptions, satisfied by two, since their only shell holds no more." },
              { q: "Sodium has one valence electron. It will most readily…", opts: ["Gain seven electrons", "Lose one electron", "Gain one electron", "Remain unreactive"], a: 1, why: "Shedding one electron exposes the full shell beneath — far cheaper energetically than acquiring seven. Hence Na⁺, and hence group 1's characteristic +1 charge." },
              { q: "Noble gases are unreactive because…", opts: ["They are heavy", "Their outer shell is already full", "They have no electrons", "They are metals"], a: 1, why: "With a complete octet there is nothing to gain or lose, so the driving force behind bonding is absent. Their name captures it — noble, self-sufficient, aloof." },
              { q: "Potassium reacts more violently with water than sodium because its valence electron is…", opts: ["Closer to the nucleus", "Farther out and more shielded", "Doubled", "Negatively charged"], a: 1, why: "Potassium's outer electron sits in a higher shell, farther from the nucleus and screened by more inner electrons, so nuclear grip is weaker and the electron is lost more easily — greater reactivity." },
              { q: "An element in group 17 will most likely form an ion of charge…", opts: ["+1", "−1", "+7", "−7"], a: 1, why: "Halogens are one electron short of eight, so they gain exactly one and become −1. Gaining one beats losing seven by a wide margin." },
            ],
          },
        ],
      },
      {
        name: "Bonding & formulas",
        lessons: [
          {
            id: "c4a",
            title: "Ionic vs covalent bonding",
            idea: "There are two ways to satisfy the octet: hand electrons over, or share them. That fork determines nearly every property of the resulting substance.",
            sections: [
              {
                h: "Ionic bonding — transfer",
                p: "When a metal meets a nonmetal, the electronegativity difference is large and electrons are transferred outright. Sodium surrenders its lone valence electron to chlorine; both reach an octet, and the resulting Na⁺ and Cl⁻ attract electrostatically. Note carefully that there is no discrete NaCl 'molecule' — ions arrange into an extended three-dimensional lattice in which every sodium is surrounded by chlorides and vice versa. The formula NaCl reports a ratio, not a particle count.",
              },
              {
                h: "Covalent bonding — sharing",
                p: "When two nonmetals meet, neither will surrender electrons, so they share pairs instead. Each shared pair counts toward both atoms' octets, which is how oxygen achieves eight while owning only six of its own. Sharing produces discrete molecules with definite boundaries — one H₂O molecule is a genuine object in a way that 'one NaCl' is not. Atoms may share one, two, or three pairs, giving single, double, and triple bonds of increasing strength and decreasing length.",
              },
              {
                h: "Predicting properties from bond type",
                p: "Bond type predicts behavior reliably. Ionic compounds have high melting points, since breaking a whole lattice of electrostatic attractions demands great energy; they are brittle, and they conduct electricity when molten or dissolved because ions become free to move. Covalent molecular substances have low melting points, since only weak forces between separate molecules need overcoming — not the strong bonds inside them — and they generally do not conduct, having no free charges. Table salt melts near 800 °C; water melts at 0 °C.",
              },
              {
                h: "The spectrum, and polarity",
                p: "Ionic and covalent are the ends of a continuum, not two sealed boxes. When shared electrons are shared unequally — as in water, where oxygen pulls harder than hydrogen — the bond is polar covalent, leaving partial charges on each end. That partial separation is why water dissolves salts, why it has an unusually high boiling point, and ultimately why it supports life. The rule of thumb: a large electronegativity difference gives ionic, a small one polar covalent, and near zero pure covalent.",
              },
            ],
            mnemonic: "CO-valent = CO-own: the atoms co-own the electrons. Ionic = 'I own it' — one atom takes the electron outright.",
            pitfall: "Saying ionic bonds are stronger than covalent ones because salt melts at a higher temperature. Melting a molecular solid breaks weak forces between molecules, not the covalent bonds within them — the comparison is not like for like.",
            tutor: "Teach bonding as a decision tree: metal + nonmetal → transfer → ionic; nonmetal + nonmetal → share → covalent. Then have the student predict melting point and conductivity from that single branch.",
            qs: [
              { q: "In an ionic bond, electrons are…", opts: ["Shared equally", "Transferred from one atom to another", "Destroyed", "Shared unequally"], a: 1, why: "A large electronegativity gap between metal and nonmetal drives outright transfer, producing oppositely charged ions held together by electrostatic attraction." },
              { q: "NaCl has a very high melting point because…", opts: ["Its molecules are heavy", "A whole lattice of ionic attractions must be broken", "Sodium is a metal", "It is covalent"], a: 1, why: "Every ion is held by many oppositely charged neighbors in an extended lattice, so melting requires overcoming an enormous network of strong electrostatic forces at once." },
              { q: "Which substance conducts electricity when dissolved in water?", opts: ["Sugar", "NaCl", "Oxygen gas", "Wax"], a: 1, why: "Dissolving separates NaCl into mobile Na⁺ and Cl⁻ ions, and mobile charge is precisely what conduction requires. Sugar dissolves as neutral molecules and leaves the solution non-conducting." },
              { q: "Water's O–H bond is polar covalent because…", opts: ["Electrons are transferred", "Oxygen attracts the shared electrons more strongly", "Hydrogen is a metal", "It contains ions"], a: 1, why: "The electrons are shared but unequally, oxygen being far more electronegative. The result is a partial negative charge on oxygen and partial positives on the hydrogens — the origin of water's remarkable properties." },
              { q: "A bond between two identical nonmetal atoms, such as in Cl₂, is…", opts: ["Ionic", "Polar covalent", "Pure covalent", "Metallic"], a: 2, why: "Identical atoms have identical electronegativity, so the electrons are shared perfectly evenly — a nonpolar, pure covalent bond with no partial charges." },
            ],
          },
          {
            id: "c4b",
            title: "Reading and writing formulas",
            idea: "A chemical formula is a sentence. Learn its grammar and you can read any compound, and write ones you have never seen.",
            sections: [
              {
                h: "Subscripts and coefficients",
                p: "A subscript, written small and low, counts the atoms of the symbol it follows: H₂O means two hydrogens and one oxygen, with '1' never written. A coefficient, written full-size in front, multiplies the entire formula: 3 H₂O means three water molecules, hence six hydrogens and three oxygens. Parentheses group a unit before multiplying, so Ca(OH)₂ contains two complete OH groups — one calcium, two oxygens, two hydrogens. Counting atoms accurately in formulas like Al₂(SO₄)₃ is a skill worth drilling, since every balancing problem depends on it.",
              },
              {
                h: "Building ionic formulas by charge balance",
                p: "An ionic compound must be electrically neutral overall, so charges have to cancel. Magnesium forms Mg²⁺ and chloride forms Cl⁻, so two chlorides are needed per magnesium: MgCl₂. The mechanical shortcut is the crossover method — write each ion's charge magnitude as the other's subscript, then reduce to lowest terms. Mg²⁺ with O²⁻ would crossover to Mg₂O₂, which reduces properly to MgO. Always reduce; formulas report the simplest whole-number ratio.",
              },
              {
                h: "Polyatomic ions",
                p: "Some ions are groups of atoms carrying a single overall charge, and they travel together through reactions as one unit. The essential ones are sulfate SO₄²⁻, nitrate NO₃⁻, carbonate CO₃²⁻, phosphate PO₄³⁻, hydroxide OH⁻, and ammonium NH₄⁺ — the only common positive one. Treat each as a single indivisible package: when more than one is needed, it goes inside parentheses, as in Al₂(SO₄)₃. These half-dozen are worth outright memorization; they recur constantly.",
              },
              {
                h: "Conservation of mass and balancing",
                p: "Atoms are never created or destroyed in a chemical reaction — they are only rearranged, a fact Lavoisier established by weighing sealed vessels. Consequently every element must appear in equal numbers on both sides of an equation, which is what balancing enforces. The cardinal rule is that only coefficients may be adjusted, never subscripts: changing a subscript changes the substance itself. H₂ + O₂ → H₂O balances to 2 H₂ + O₂ → 2 H₂O, and writing H₂O₂ instead would silently substitute hydrogen peroxide for water.",
              },
            ],
            mnemonic: "A subscript is a headcount written at the atom's feet. A coefficient stands out front and multiplies everything behind it. Nick the Camel ate Clam Supper in Phoenix — Nitrate, Carbonate, Chlorate, Sulfate, Phosphate, in order of oxygen count 3, 3, 3, 4, 4.",
            pitfall: "Balancing an equation by editing subscripts. That changes the chemical identity of the substance — only coefficients may be touched.",
            tutor: "Have your student count total atoms in Al₂(SO₄)₃ aloud, group by group. If they can navigate parentheses confidently, ionic naming and equation balancing both fall into place.",
            qs: [
              { q: "How many atoms in total are in H₂SO₄?", opts: ["6", "7", "5", "8"], a: 1, why: "Two hydrogens, one sulfur, four oxygens: 2 + 1 + 4 = 7 atoms. Sulfur's implicit subscript of 1 is never written but must be counted." },
              { q: "Ca(OH)₂ contains how many oxygen atoms?", opts: ["1", "2", "3", "4"], a: 1, why: "The subscript 2 applies to the entire parenthesized OH group, giving two oxygens and two hydrogens alongside one calcium." },
              { q: "Al³⁺ and O²⁻ combine to form…", opts: ["AlO", "Al₂O₃", "Al₃O₂", "AlO₂"], a: 1, why: "Charges must cancel: two Al³⁺ give +6 and three O²⁻ give −6. The crossover method gives the same answer directly — each charge magnitude becomes the other ion's subscript." },
              { q: "In 3 H₂O, how many hydrogen atoms are present?", opts: ["2", "3", "6", "5"], a: 2, why: "The coefficient 3 multiplies the whole formula, and each molecule holds 2 hydrogens: 3 × 2 = 6." },
              { q: "When balancing an equation you may change…", opts: ["Subscripts only", "Coefficients only", "Both freely", "Neither"], a: 1, why: "Coefficients change how many molecules react; subscripts define what the molecule IS. Altering H₂O to H₂O₂ replaces water with hydrogen peroxide — a different substance entirely." },
            ],
          },
        ],
      },
    ],
  },

  phys: {
    name: "Physics",
    units: [
      {
        name: "Describing motion",
        lessons: [
          {
            id: "p1a",
            title: "Quantities, units, vectors",
            idea: "Before you can explain motion you must be able to describe it precisely. That means units, and it means direction.",
            sections: [
              {
                h: "Scalars and vectors",
                p: "A scalar is fully specified by a magnitude and a unit: mass 70 kg, time 12 s, temperature 300 K. A vector requires magnitude and direction: velocity 5 m/s north, force 20 N downward, displacement 3 m east. The distinction is not bookkeeping — it changes the arithmetic. Scalars add straightforwardly, 3 kg plus 4 kg is 7 kg. Vectors add geometrically: 3 m east plus 4 m north gives 5 m northeast, by Pythagoras, not 7 m.",
              },
              {
                h: "Distance versus displacement",
                p: "This pairing shows the difference in its clearest form. Distance is a scalar totalling the path travelled; displacement is a vector running straight from start to finish. Walk 400 m around a track back to your starting line and you have covered 400 m of distance with zero displacement. Neither figure is wrong; they answer different questions. Distance asks how much ground you covered, displacement asks how far you ended up from where you began.",
              },
              {
                h: "Components — the vector's working form",
                p: "Any vector can be decomposed into perpendicular components, typically horizontal and vertical, and that decomposition is what makes vectors tractable. A ball launched at an angle has independent horizontal and vertical motions that can be analyzed separately and recombined at the end. This is why projectile motion is solvable at all, and why gravity affects only the vertical component while horizontal motion continues undisturbed.",
              },
              {
                h: "Units as a check on reasoning",
                p: "Every physical equation must be dimensionally consistent — both sides carrying the same units. This gives you a free audit of any formula you half-remember. Is kinetic energy ½mv or ½mv²? Energy must come out in joules, which are kg·m²/s². Since m is kg and v² is m²/s², the product is exactly kg·m²/s², whereas mv gives kg·m/s, which is momentum. The units settle the question without any need to trust memory.",
              },
            ],
            mnemonic: "Vector → an arrow → arrows have length AND point somewhere. Scalar → a scale → it only reads a number.",
            pitfall: "Adding vectors as if they were plain numbers. Direction matters: 3 m east plus 4 m north is 5 m, not 7 m.",
            tutor: "Open with the running-track example every time. Zero displacement after a full lap is the counterintuitive fact that makes the vector/scalar distinction stick permanently.",
            qs: [
              { q: "Which of these is a vector?", opts: ["Mass", "Time", "Speed", "Velocity"], a: 3, why: "Velocity carries both magnitude and direction (5 m/s north). Speed gives magnitude only; mass and time have no direction at all." },
              { q: "You jog one full lap of a 400 m track. Your displacement is…", opts: ["400 m", "0 m", "200 m", "800 m"], a: 1, why: "Displacement is the straight line from start to finish. Ending where you began makes it zero — while distance travelled is a full 400 m. The two answer different questions." },
              { q: "Walking 3 m east then 4 m north gives a displacement of…", opts: ["7 m", "1 m", "5 m", "12 m"], a: 2, why: "Perpendicular vectors add by Pythagoras: √(3² + 4²) = √25 = 5 m, directed northeast. Simple addition would apply only if both legs pointed the same way." },
              { q: "Checking that both sides of an equation carry the same units is called…", opts: ["Estimation", "Dimensional consistency", "Vector addition", "Approximation"], a: 1, why: "A valid physical equation must balance dimensionally. The check catches misremembered formulas instantly — mv gives momentum units, ½mv² gives energy units." },
              { q: "Decomposing a vector into perpendicular components is useful because…", opts: ["It reduces its magnitude", "The components can be analyzed independently", "It removes direction", "It converts vectors to scalars"], a: 1, why: "Perpendicular directions do not influence one another, so horizontal and vertical motion can be solved separately and recombined — the entire basis of projectile analysis." },
            ],
          },
          {
            id: "p1b",
            title: "Speed, velocity, acceleration",
            idea: "Three quantities, each the rate of change of the one before it: position → velocity → acceleration.",
            sections: [
              {
                h: "Speed and velocity",
                p: "Speed is distance ÷ time, a scalar. Velocity is displacement ÷ time, a vector. Run a lap in 80 s and your average speed is 5 m/s while your average velocity is zero, since displacement was zero. Distinguish average from instantaneous as well: average velocity covers a whole interval, whereas instantaneous velocity is the value at a single moment — what a speedometer shows. In calculus terms, instantaneous velocity is the derivative of position, though the idea stands without the calculus.",
              },
              {
                h: "Acceleration as the rate of change of velocity",
                p: "Acceleration is change in velocity divided by time, measured in m/s². Read the unit aloud — meters per second, per second — and it explains itself: your velocity changes by so many m/s during each second. Since velocity is a vector, an object accelerates whenever it speeds up, slows down, or merely changes direction. A car rounding a bend at constant speed is accelerating, because its direction, and therefore its velocity, is changing.",
              },
              {
                h: "Signs, and what they do and do not mean",
                p: "A negative acceleration does not automatically mean slowing down. The sign indicates direction along your chosen axis. When acceleration points opposite to velocity, the object slows; when it points the same way, the object speeds up regardless of whether both are negative. An object with velocity −10 m/s and acceleration −2 m/s² is moving backward and speeding up. Always fix a positive direction first and interpret signs against it.",
              },
              {
                h: "Free fall",
                p: "Near Earth's surface, gravity produces a constant downward acceleration of about 9.8 m/s², written g. Neglecting air resistance, this applies to every object regardless of mass — Galileo's famous claim, later demonstrated by an Apollo astronaut dropping a hammer and a feather together on the airless Moon. A feather falls slowly on Earth because of air resistance, not because gravity treats it differently.",
              },
            ],
            mnemonic: "m/s² — your speed (m/s) changes every second (÷ s again). Acceleration is 'the change of the change'.",
            pitfall: "Believing zero velocity implies zero acceleration. At the peak of a thrown ball's flight velocity is momentarily zero, yet acceleration remains 9.8 m/s² downward — which is why it does not hover there.",
            tutor: "Use the thrown-ball apex relentlessly. Once a student accepts that velocity can be zero while acceleration is not, they have genuinely separated the two concepts.",
            qs: [
              { q: "A car accelerates from 0 to 20 m/s in 4 s. Its acceleration is…", opts: ["80 m/s²", "5 m/s²", "4 m/s²", "0.2 m/s²"], a: 1, why: "a = Δv ÷ t = (20 − 0) ÷ 4 = 5 m/s². Each second, its velocity climbs by 5 m/s — which is exactly what the unit m/s² announces." },
              { q: "A ball thrown straight up is momentarily at rest at its peak. Its acceleration there is…", opts: ["Zero", "9.8 m/s² downward", "9.8 m/s² upward", "Undefined"], a: 1, why: "Gravity never pauses. Velocity passes through zero as it reverses, but the downward acceleration of 9.8 m/s² continues throughout — which is precisely why the ball comes back down." },
              { q: "A car rounds a curve at a constant 30 km/h. It is…", opts: ["Not accelerating", "Accelerating, because direction is changing", "Decelerating", "In equilibrium"], a: 1, why: "Velocity is a vector, so a change in direction is a change in velocity — hence acceleration, even with speed held constant. This is centripetal acceleration." },
              { q: "An object has velocity −10 m/s and acceleration −2 m/s². It is…", opts: ["Slowing down", "Speeding up in the negative direction", "At rest", "Moving forward"], a: 1, why: "Acceleration shares the sign of velocity, so both point the same way and the object gains speed while travelling in the negative direction. Negative acceleration means slowing only when it opposes velocity." },
              { q: "Neglecting air resistance, a heavy ball and a light ball dropped together will…", opts: ["Land together", "The heavy one lands first", "The light one lands first", "Depends on shape"], a: 0, why: "Gravitational acceleration is 9.8 m/s² for every mass. Greater mass means greater force but proportionally greater inertia, and the two cancel exactly — as the Apollo 15 hammer-and-feather drop showed on the airless Moon." },
            ],
          },
          {
            id: "p1c",
            title: "The kinematic equations",
            idea: "For constant acceleration, four equations relate displacement, velocity, acceleration, and time. Choose by what is missing.",
            sections: [
              {
                h: "The equations",
                p: "Assuming constant acceleration, the standard set is: v = v₀ + at; x = v₀t + ½at²; v² = v₀² + 2ax; and x = ½(v₀ + v)t. Each contains four of the five quantities — initial velocity, final velocity, acceleration, displacement, time. The professional habit is to identify which quantity is neither given nor asked for, and then pick the equation that omits it. That converts a memory task into a selection task.",
              },
              {
                h: "How to attack a kinematics problem",
                p: "The disciplined procedure: sketch the situation, define a positive direction, list the known quantities with units, identify the unknown, note the quantity that is absent, then select the matching equation. Only then substitute numbers. Beginners reach for numbers first and stall; experts spend most of their effort on setup, so that the algebra becomes trivial and the arithmetic is a formality.",
              },
              {
                h: "Worked example",
                p: "A car at 20 m/s brakes at −4 m/s² until it stops. How far does it travel? Known: v₀ = 20, v = 0, a = −4. Unknown: x. Absent: time. The equation without t is v² = v₀² + 2ax, giving 0 = 400 + 2(−4)x, so 8x = 400 and x = 50 m. Note how quickly this went once time was identified as the missing quantity — the choice of equation did nearly all the work.",
              },
              {
                h: "The essential caveat",
                p: "These equations hold only for constant acceleration. They apply beautifully to free fall and to steady braking, and they fail for a car in city traffic or a rocket burning fuel and losing mass. Recognizing when a tool does not apply is as much a part of physics as applying it — an equation used outside its assumptions produces confident nonsense.",
              },
            ],
            mnemonic: "'Find the missing one.' Each equation is defined by the variable it leaves out — no t, no x, no v, no a. Identify the absent quantity and the equation selects itself.",
            pitfall: "Applying these equations to non-constant acceleration. Check that assumption before writing a single symbol.",
            tutor: "Train the selection habit rather than the equations. Hand your student problems and require them to name the missing variable and the chosen equation before any calculation — that is where the real skill lives.",
            qs: [
              { q: "The kinematic equations are valid only when…", opts: ["Motion is horizontal", "Acceleration is constant", "Velocity is zero", "There is no friction"], a: 1, why: "Every one of them is derived assuming constant acceleration. Free fall and steady braking qualify; stop-and-go traffic does not, and using them there yields confident nonsense." },
              { q: "Which equation should you choose when time is neither given nor asked for?", opts: ["v = v₀ + at", "x = v₀t + ½at²", "v² = v₀² + 2ax", "x = ½(v₀ + v)t"], a: 2, why: "v² = v₀² + 2ax is the only one of the four that omits t, which makes it the right tool whenever time is the absent quantity." },
              { q: "A car at 20 m/s brakes at −4 m/s² to a stop. Distance travelled?", opts: ["25 m", "50 m", "80 m", "100 m"], a: 1, why: "Use v² = v₀² + 2ax with v = 0: 0 = 400 + 2(−4)x → 8x = 400 → x = 50 m. Time never appears, so no other equation is needed." },
              { q: "An object dropped from rest falls for 3 s (g ≈ 10). Distance fallen?", opts: ["30 m", "45 m", "90 m", "15 m"], a: 1, why: "x = v₀t + ½at² with v₀ = 0 gives x = ½ × 10 × 9 = 45 m. The t² is why falling distance grows so rapidly with time." },
              { q: "The first step in a kinematics problem should be to…", opts: ["Plug in numbers", "List knowns, unknown, and the missing variable", "Guess the equation", "Convert to km/h"], a: 1, why: "Setup determines everything. Naming the knowns, the unknown, and the absent quantity selects the equation automatically and makes the algebra routine." },
            ],
          },
        ],
      },
      {
        name: "Forces",
        lessons: [
          {
            id: "p2a",
            title: "Newton's first law & inertia",
            idea: "Motion needs no cause. Only a CHANGE in motion needs a cause, and that cause is called force.",
            sections: [
              {
                h: "The law, and the revolution in it",
                p: "An object at rest stays at rest, and an object in motion continues in a straight line at constant speed, unless acted on by a net external force. Aristotle had held that motion requires a continuous push, which matches everyday experience because friction is everywhere. Galileo and Newton recognized friction as an extra force rather than a fact of nature, and saw that in its absence motion simply persists. Nothing sustains a spacecraft coasting between planets — that is the natural state.",
              },
              {
                h: "Net force",
                p: "The operative word is net: the vector sum of all forces acting. A book resting on a table experiences gravity pulling down and the table's normal force pushing up in exact balance, so the net force is zero and the book does not accelerate. Two people pushing a crate in opposite directions with equal strength produce no motion, though neither force has vanished. Zero net force is not the absence of forces; it is their cancellation.",
              },
              {
                h: "Inertia and mass",
                p: "Inertia is the tendency of an object to resist changes in its motion, and mass is its quantitative measure. A loaded truck is harder to start and harder to stop than a bicycle, and equally hard in both directions — inertia resists any change, not merely acceleration. This gives mass a second and deeper definition: it is not only the amount of matter, but the measure of resistance to acceleration.",
              },
              {
                h: "Everyday consequences",
                p: "Seatbelts exist because of the first law. In a collision the car stops abruptly while your body, subject to no force yet, continues forward at the original speed until something stops it — ideally a belt distributing the force across your pelvis and chest rather than a windshield concentrating it on your skull. Whiplash is the same law applied to the head, which lags behind the torso when the seat pushes the body forward.",
              },
            ],
            mnemonic: "The 'lazy law': objects are lazy and will not change what they are doing unless forced to. Inertia ← Latin iners, 'idle, unskilled'.",
            pitfall: "Assuming a moving object must have a force pushing it along. Constant velocity means zero NET force — a plane in steady cruise has thrust exactly cancelling drag.",
            tutor: "Ask what force keeps a hockey puck sliding. Students almost always invent one. The correction — nothing does; it persists on its own — is the moment Aristotle gives way to Newton in their head.",
            qs: [
              { q: "An object moving at constant velocity has a net force of…", opts: ["Its weight", "Zero", "mass × velocity", "9.8 N"], a: 1, why: "Constant velocity means no acceleration, and no acceleration means zero net force. Individual forces may be large — thrust and drag on a cruising plane — but they cancel exactly." },
              { q: "Inertia is measured by an object's…", opts: ["Speed", "Mass", "Volume", "Weight"], a: 1, why: "Mass is the quantitative measure of resistance to changes in motion. This is why mass has a second definition beyond 'amount of matter': it is resistance to acceleration." },
              { q: "In a sudden stop, your body lunges forward because…", opts: ["The car pushes you forward", "Your body continues its motion until a force stops it", "Gravity acts forward", "Air pressure pushes you"], a: 1, why: "First law: your body was moving and no force has yet acted on it, so it keeps going while the car stops. The seatbelt supplies the stopping force safely." },
              { q: "A hockey puck slides across ice at nearly constant speed. What keeps it moving?", opts: ["A forward force", "Momentum being applied", "Nothing — no force is needed", "Ice pushes it"], a: 2, why: "Motion requires no cause; only change of motion does. With friction almost absent, the puck simply continues. The intuition that something must push it is Aristotle's error." },
              { q: "A book rests motionless on a table. This means…", opts: ["No forces act on it", "Gravity and the normal force cancel", "Gravity is absent", "The table has no force"], a: 1, why: "Two substantial forces act — weight downward and the normal force upward — but they are equal and opposite, so the net force is zero and the book stays put." },
            ],
          },
          {
            id: "p2b",
            title: "Newton's second law: F = ma",
            idea: "The single most useful equation in mechanics. It converts force into motion and motion back into force.",
            sections: [
              {
                h: "The equation and its meaning",
                p: "Net force equals mass times acceleration: F = ma, with force in newtons, where 1 N is defined as the force that accelerates 1 kg at 1 m/s². Read the relationship in both directions. Acceleration is proportional to net force, so double the push and you double the acceleration. Acceleration is inversely proportional to mass, so double the mass under the same force and the acceleration halves. Every quantitative mechanics problem you will meet is some rearrangement of this statement.",
              },
              {
                h: "It is the NET force",
                p: "The F in F = ma is always the vector sum of all forces. Push a 10 kg crate with 30 N against 10 N of friction and the net force is 20 N, giving a = 2 m/s². Inserting the applied force alone is the most frequent error in introductory mechanics. Draw a free-body diagram — the object as a dot with every force as an arrow — before writing anything down, and the mistake becomes hard to make.",
              },
              {
                h: "Why the first law is a special case",
                p: "Set a = 0 in F = ma and the net force must be zero: that is precisely Newton's first law. The laws are not three independent facts but a single coherent framework, with the first law being the second law's zero-acceleration case. Recognizing that structure is worth more than memorizing the statements separately.",
              },
              {
                h: "Applying it in practice",
                p: "The method is always the same: identify the object, list every force acting on it, add them as vectors to get the net force, then apply F = ma. It explains why a loaded truck accelerates sluggishly, why airbags help — they extend the stopping time, lowering the acceleration and hence the force your body absorbs — and why a punch hurts more when it is faster. Force problems in medicine and biomechanics are this equation with anatomy attached.",
              },
            ],
            mnemonic: "F = ma → 'Force MAkes acceleration'. And 1 newton is roughly the weight of a small apple — Newton's apple, conveniently.",
            pitfall: "Using the applied force rather than the net force. Subtract friction and any opposing forces first, or every answer will be too large.",
            tutor: "Require a free-body diagram before any calculation, without exception. Most errors are bookkeeping errors about which forces act, and the diagram eliminates them.",
            qs: [
              { q: "A 2 kg object accelerates at 3 m/s². The net force is…", opts: ["1.5 N", "6 N", "5 N", "0.67 N"], a: 1, why: "F = ma = 2 × 3 = 6 N. The units confirm it: kg × m/s² is exactly the definition of the newton." },
              { q: "You push a 10 kg crate with 30 N while friction opposes with 10 N. Its acceleration is…", opts: ["3 m/s²", "2 m/s²", "4 m/s²", "1 m/s²"], a: 1, why: "Net force = 30 − 10 = 20 N, so a = F ÷ m = 20 ÷ 10 = 2 m/s². Using the 30 N applied force alone would wrongly give 3 m/s²." },
              { q: "The same force applied to twice the mass produces…", opts: ["Twice the acceleration", "The same acceleration", "Half the acceleration", "Zero acceleration"], a: 2, why: "a = F ÷ m, so acceleration is inversely proportional to mass. This is why a loaded truck accelerates far more slowly than an empty one under the same engine force." },
              { q: "Airbags reduce injury chiefly because they…", opts: ["Reduce your mass", "Extend the stopping time, lowering acceleration and force", "Increase the force", "Eliminate inertia"], a: 1, why: "Your change in velocity is fixed by the crash, but spreading it over a longer time reduces acceleration, and by F = ma reduces the force your body must absorb." },
              { q: "Setting a = 0 in F = ma yields…", opts: ["Newton's first law", "Newton's third law", "The law of gravity", "Conservation of energy"], a: 0, why: "Zero acceleration forces the net force to zero — exactly the first law. The first law is the second law's special case, not an independent rule." },
            ],
          },
          {
            id: "p2c",
            title: "Third law, weight, and friction",
            idea: "Forces always come in pairs, weight is a force rather than a property, and friction is what makes real life differ from the textbook.",
            sections: [
              {
                h: "The third law",
                p: "For every action there is an equal and opposite reaction: if A pushes B, then B pushes A with equal magnitude in the opposite direction. The crucial subtlety is that the two forces act on different objects, which is why they never cancel each other out. Earth pulls you down with your weight while you pull Earth up with exactly the same force — and Earth's colossal mass means its resulting acceleration is unmeasurably small. A rocket accelerates in vacuum by pushing exhaust backward; the exhaust pushes the rocket forward. It needs nothing to push against.",
              },
              {
                h: "Mass versus weight",
                p: "Mass is the quantity of matter, measured in kilograms, and it is identical everywhere in the universe. Weight is the gravitational force on that mass, measured in newtons, and it varies with local gravity: W = mg. A 70 kg person weighs about 686 N on Earth and roughly 114 N on the Moon, while the mass remains 70 kg in both places. Bathroom scales report kilograms only by assuming Earth's g and converting silently — on the Moon the same scale would read wrongly.",
              },
              {
                h: "The normal force",
                p: "The normal force is the perpendicular push a surface exerts on an object resting against it — 'normal' meaning perpendicular, not usual. On level ground it equals weight, but not always: in an accelerating elevator it differs from weight, which is exactly the sensation of feeling heavy or light as the elevator starts and stops. It is not the third-law partner of weight either; weight's partner is your pull on Earth, while the normal force's partner is your push on the floor.",
              },
              {
                h: "Friction",
                p: "Friction opposes relative motion between surfaces and comes in two forms. Static friction resists the start of motion and can grow up to a maximum, which is why a heavy box refuses to budge until you push hard enough. Kinetic friction acts once sliding has begun and is generally somewhat smaller — hence the box lurches forward the moment it breaks free. Friction is proportional to the normal force, not to contact area, which is why pressing down harder makes sliding harder while a wider block slides no differently.",
              },
            ],
            mnemonic: "Push a wall: it pushes back exactly as hard, which is why your hand hurts. Weight = mg → 'mass gets gravity'.",
            pitfall: "Believing action-reaction pairs cancel. They act on different objects, so they never cancel — cancellation requires both forces on the SAME object.",
            tutor: "Ask why a horse can pull a cart if the cart pulls back equally. Working through it — the forces act on different bodies, and the horse's traction against the ground is what moves the system — is the classic test of whether the third law is truly understood.",
            qs: [
              { q: "Action-reaction pairs never cancel because they…", opts: ["Differ in size", "Act on different objects", "Act at different times", "Are not real forces"], a: 1, why: "Cancellation requires two forces acting on the same object. Third-law partners always act on different bodies — you on the wall, the wall on you." },
              { q: "A 10 kg object on Earth (g ≈ 9.8) weighs about…", opts: ["10 N", "98 N", "9.8 N", "980 N"], a: 1, why: "W = mg = 10 × 9.8 = 98 N. Weight is a force in newtons; the 10 kg is mass, which never changes with location." },
              { q: "On the Moon, an astronaut's mass and weight…", opts: ["Both decrease", "Mass stays the same, weight decreases", "Both stay the same", "Mass decreases, weight stays"], a: 1, why: "Mass is the amount of matter and is location-independent. Weight is mg, and the Moon's smaller g gives roughly one-sixth the weight." },
              { q: "A rocket accelerates in the vacuum of space because…", opts: ["It pushes against air", "Exhaust gas pushed backward pushes the rocket forward", "Gravity pulls it", "Vacuum sucks it"], a: 1, why: "Third law: the rocket pushes exhaust one way and the exhaust pushes the rocket the other. No external medium is required — which is precisely why rockets work in vacuum." },
              { q: "A heavy box suddenly lurches forward once it starts sliding because…", opts: ["Kinetic friction is usually less than maximum static friction", "The push increased", "Its mass dropped", "Gravity changed"], a: 0, why: "You must exceed maximum static friction to start motion, but once sliding, the smaller kinetic friction applies. The surplus force produces the sudden lurch." },
            ],
          },
        ],
      },
      {
        name: "Energy",
        lessons: [
          {
            id: "p3a",
            title: "Work & kinetic energy",
            idea: "Energy is the currency of physics. Work is the transaction that moves it from one place to another.",
            sections: [
              {
                h: "Work has a technical meaning",
                p: "Work is force times displacement in the direction of that force: W = Fd, measured in joules, where one joule is one newton acting through one meter. Only the component of force along the displacement counts. Hold a heavy suitcase motionless and you do zero work on it, however exhausted you become — your muscles consume energy through repeated contraction, but no work is transferred to the suitcase. Carry it horizontally and you still do no work against gravity, since the force is vertical and the motion is horizontal.",
              },
              {
                h: "Kinetic energy",
                p: "Kinetic energy is the energy of motion: KE = ½mv², in joules. The squared velocity is the term to internalize. Doubling mass doubles KE, but doubling speed quadruples it. This is why speed limits matter so much more than vehicle weight for crash severity, why a car at 100 km/h carries four times the energy it had at 50, and why stopping distances grow far faster than speed does. When a fact about collisions surprises you, the v² is usually the reason.",
              },
              {
                h: "The work-energy theorem",
                p: "The net work done on an object equals its change in kinetic energy: W_net = ΔKE. This is one of the most powerful tools in mechanics because it bypasses time entirely. Asking how far a braking car travels can be answered without ever computing duration: the braking force times the distance must remove all the kinetic energy. Energy methods often solve in one line what kinematics needs three steps to reach.",
              },
              {
                h: "Power",
                p: "Power is the rate of doing work: P = W ÷ t, measured in watts, with one watt equalling one joule per second. Power says nothing about how much work is done and everything about how quickly. Carrying groceries up the stairs slowly or quickly does identical work against gravity, but the sprint demands far more power. A 100 W bulb consumes 100 joules every second; the same distinction separates a sprinter from a marathoner physiologically.",
              },
            ],
            mnemonic: "KE = ½mv² — the v is squared, so speed is doubly dangerous. Joule ← James Joule, who showed heat and work are the same currency.",
            pitfall: "Assuming that feeling tired means work was done. Physics work requires displacement in the direction of the force; holding a weight still does zero work on it.",
            tutor: "Lead with the v² consequence: at twice the speed there is four times the energy to dissipate. It turns an abstract formula into a fact about survival, and students never forget it.",
            qs: [
              { q: "You hold a 20 kg box motionless for five minutes. The work you do on the box is…", opts: ["Large", "Small", "Zero", "Negative"], a: 2, why: "W = Fd and displacement is zero, so the work is zero. Your fatigue comes from repeated muscle contraction consuming energy internally, not from work transferred to the box." },
              { q: "Kinetic energy of a 2 kg object moving at 3 m/s is…", opts: ["6 J", "9 J", "18 J", "3 J"], a: 1, why: "KE = ½mv² = ½ × 2 × 9 = 9 J. Square the velocity before multiplying — a very common slip is to square the whole product instead." },
              { q: "Doubling a car's speed multiplies its kinetic energy by…", opts: ["2", "4", "8", "1"], a: 1, why: "KE depends on v², so double speed gives 2² = 4 times the energy — and roughly four times the stopping distance. This is the physics behind speed limits." },
              { q: "The work-energy theorem states that net work equals…", opts: ["Total energy", "Change in kinetic energy", "Power × mass", "Force × time"], a: 1, why: "W_net = ΔKE. Its power lies in bypassing time entirely, which makes stopping-distance and impact problems far quicker to solve than with kinematics." },
              { q: "Two people carry identical loads up identical stairs, one in 10 s and one in 30 s. Compared with the slower, the faster does…", opts: ["More work, more power", "The same work, more power", "Less work, less power", "The same work, the same power"], a: 1, why: "Work against gravity depends only on weight and height, so it is identical. Power is work per unit time, so completing it in a third of the time requires three times the power." },
            ],
          },
          {
            id: "p3b",
            title: "Potential energy & conservation",
            idea: "Energy is never created or destroyed. Every problem becomes an accounting exercise.",
            sections: [
              {
                h: "Potential energy",
                p: "Potential energy is stored energy, held by virtue of position or configuration. Gravitational potential energy is PE = mgh, the energy an object holds by being at height h. Elastic potential energy is stored in a stretched spring or drawn bow; chemical potential energy is stored in the bonds of fuel and food. Only changes in PE are physically meaningful, so the height h is measured from whatever reference level you choose — the choice is free, but it must stay fixed throughout a problem.",
              },
              {
                h: "Conservation of energy",
                p: "Energy cannot be created or destroyed, only transformed from one form to another. In an ideal system, KE + PE remains constant, so as a ball falls its PE converts into KE with the total unchanged. A pendulum trades the two back and forth endlessly: maximum PE at the extremes where it pauses, maximum KE at the lowest point where it moves fastest. Real systems lose energy to friction and air resistance, but that energy is not destroyed — it becomes heat, and the ledger still balances.",
              },
              {
                h: "Solving problems with energy",
                p: "Conservation lets you compare two moments in time without knowing anything about what happened between them. To find the speed of a ball dropped from 20 m, set mgh = ½mv²; the mass cancels, giving v = √(2gh) = √400 = 20 m/s. Forces, timing, and trajectory shape never enter the calculation. This is why energy methods are so prized: they collapse complicated intermediate detail into a comparison of endpoints.",
              },
              {
                h: "Energy in the wider world",
                p: "The same accounting extends far beyond mechanics. Sunlight becomes chemical energy in a plant, which becomes chemical energy in your cells, which becomes mechanical work in muscle and heat in tissue. A calorie is a unit of energy just as a joule is — one food calorie is about 4184 J. Metabolism, ATP hydrolysis, and the thermodynamics of the cell all run on the ledger you are learning here, which is a large part of why this material appears on medical entrance exams.",
              },
            ],
            mnemonic: "PE = 'perched energy' — stored by being high up. mgh: 'mass gets height'. A pendulum is energy sloshing between two accounts.",
            pitfall: "Concluding that energy is lost to friction. It is converted to heat, not destroyed — the total is always conserved once heat is counted.",
            tutor: "Draw the pendulum and mark maximum PE and maximum KE at each position. One picture teaches conservation, transformation, and the inverse relationship simultaneously.",
            qs: [
              { q: "Gravitational potential energy is given by…", opts: ["½mv²", "mgh", "Fd", "ma"], a: 1, why: "PE = mgh — mass times gravitational acceleration times height. It is the work gravity will do on the object as it falls back to the reference level." },
              { q: "A 2 kg object is held 5 m above ground (g ≈ 10). Its PE is…", opts: ["10 J", "50 J", "100 J", "20 J"], a: 2, why: "PE = mgh = 2 × 10 × 5 = 100 J. Released, it would arrive at the ground with exactly 100 J of kinetic energy in the absence of air resistance." },
              { q: "At the lowest point of a pendulum's swing…", opts: ["PE is maximum", "KE is maximum", "Both are zero", "Energy is lost"], a: 1, why: "Height is minimum there, so PE is minimum and — by conservation — KE and therefore speed are at their maximum. The extremes of the swing are the reverse case." },
              { q: "A ball is dropped from 20 m (g ≈ 10). Its speed on landing is about…", opts: ["10 m/s", "20 m/s", "40 m/s", "200 m/s"], a: 1, why: "Set mgh = ½mv². Mass cancels, so v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s. Energy conservation answers this without any reference to time." },
              { q: "A sliding box gradually stops due to friction. Its energy has…", opts: ["Been destroyed", "Been converted mostly to heat", "Become potential energy", "Disappeared into the floor"], a: 1, why: "Energy is never destroyed. Friction converts kinetic energy into thermal energy in the box and surface — which is why brakes get hot and why rubbing your hands warms them." },
            ],
          },
        ],
      },
    ],
  },
};

/* ---------- helpers ---------- */
const allLessons = (k) => C[k].units.flatMap((u) => u.lessons);
const shuffle = (a) => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};
const KEY = "foundations-progress-v2";

export default function App() {
  const [done, setDone] = useState({});
  const [ready, setReady] = useState(false);
  const [view, setView] = useState({ page: "home" });
  const [phase, setPhase] = useState("read");
  const [queue, setQueue] = useState([]);
  const [mastered, setMastered] = useState({});
  const [picked, setPicked] = useState(null);
  const [showTutor, setShowTutor] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get(KEY);
        if (r && r.value) setDone(JSON.parse(r.value));
      } catch (e) {}
      setReady(true);
    })();
  }, []);

  const save = async (n) => {
    setDone(n);
    try {
      await window.storage.set(KEY, JSON.stringify(n));
    } catch (e) {
      console.error(e);
    }
  };

  const open = (trackKey, lesson) => {
    setView({ page: "lesson", trackKey, lesson });
    setPhase("read");
    setQueue(shuffle(lesson.qs.map((_, i) => i)));
    setMastered({});
    setPicked(null);
    setShowTutor(false);
    window.scrollTo(0, 0);
  };

  const next = async () => {
    const l = view.lesson;
    const qi = queue[0];
    const ok = picked === l.qs[qi].a;
    let q2 = queue.slice(1);
    if (ok) setMastered((m) => ({ ...m, [qi]: true }));
    else q2 = [...q2, qi];
    setPicked(null);
    if (q2.length === 0) {
      setPhase("done");
      if (!done[l.id]) await save({ ...done, [l.id]: true });
    } else setQueue(q2);
  };

  if (!ready)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-xs tracking-[0.2em] uppercase text-neutral-400">Loading</p>
      </div>
    );

  const serif = { fontFamily: "Georgia, 'Times New Roman', serif" };

  const Shell = ({ children, back, label }) => (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-2xl mx-auto px-6 py-8 pb-24">
        <div className="flex items-center justify-between mb-10">
          {back ? (
            <button onClick={back} className="text-sm text-neutral-500 hover:text-black">
              ← {label}
            </button>
          ) : (
            <h1 style={serif} className="text-lg font-bold">
              Foundations
            </h1>
          )}
          {!back && (
            <button
              onClick={async () => {
                if (confirm("Erase all progress?")) await save({});
              }}
              className="text-xs text-neutral-400 hover:text-black"
            >
              Reset
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );

  /* ---------- home ---------- */
  if (view.page === "home")
    return (
      <Shell>
        <div className="space-y-8">
          {Object.entries(C).map(([k, t]) => {
            const ls = allLessons(k);
            const n = ls.filter((l) => done[l.id]).length;
            return (
              <button
                key={k}
                onClick={() => setView({ page: "track", trackKey: k })}
                className="w-full text-left group"
              >
                <div className="flex items-baseline justify-between">
                  <span style={serif} className="text-4xl group-hover:underline">
                    {t.name}
                  </span>
                  <span className="text-sm text-neutral-400">
                    {n} / {ls.length}
                  </span>
                </div>
                <div className="mt-4 h-px bg-neutral-200 relative">
                  <div className="absolute left-0 top-0 h-px bg-black" style={{ width: `${(n / ls.length) * 100}%` }} />
                </div>
              </button>
            );
          })}
        </div>
      </Shell>
    );

  /* ---------- track ---------- */
  if (view.page === "track") {
    const t = C[view.trackKey];
    const flat = allLessons(view.trackKey);
    const unlocked = (id) => {
      const i = flat.findIndex((l) => l.id === id);
      return i === 0 || done[flat[i - 1].id];
    };
    return (
      <Shell back={() => setView({ page: "home" })} label="Home">
        <h2 style={serif} className="text-4xl mb-10">
          {t.name}
        </h2>
        <div className="space-y-10">
          {t.units.map((u, ui) => (
            <div key={u.name}>
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400 mb-3">
                {ui + 1} · {u.name}
              </p>
              <div className="border-t border-neutral-200">
                {u.lessons.map((l) => {
                  const o = unlocked(l.id);
                  return (
                    <button
                      key={l.id}
                      disabled={!o}
                      onClick={() => open(view.trackKey, l)}
                      className={`w-full flex items-center justify-between py-3.5 border-b border-neutral-100 text-left ${
                        o ? "hover:pl-2 transition-all" : ""
                      }`}
                    >
                      <span className={o ? "" : "text-neutral-300"}>{l.title}</span>
                      <span className="text-xs text-neutral-400">{done[l.id] ? "✓" : o ? "→" : "·"}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Shell>
    );
  }

  const l = view.lesson;
  const back = () => setView({ page: "track", trackKey: view.trackKey });

  /* ---------- read ---------- */
  if (phase === "read")
    return (
      <Shell back={back} label={C[view.trackKey].name}>
        <h2 style={serif} className="text-3xl leading-tight mb-5">
          {l.title}
        </h2>
        <p style={serif} className="text-xl leading-relaxed text-neutral-600 mb-12 border-l-2 border-black pl-5">
          {l.idea}
        </p>

        <div className="space-y-10">
          {l.sections.map((s, i) => (
            <div key={i}>
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400 mb-3">{s.h}</p>
              <p className="text-[17px] leading-[1.75]">{s.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6 text-[15px]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400 mb-2">Memory hook</p>
            <p className="italic text-neutral-700 leading-relaxed">{l.mnemonic}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400 mb-2">Where beginners go wrong</p>
            <p className="text-neutral-700 leading-relaxed">{l.pitfall}</p>
          </div>
          <div>
            <button
              onClick={() => setShowTutor(!showTutor)}
              className="text-xs uppercase tracking-[0.18em] text-neutral-400 hover:text-black"
            >
              Teaching this to someone else {showTutor ? "−" : "+"}
            </button>
            {showTutor && <p className="mt-2 text-neutral-700 leading-relaxed">{l.tutor}</p>}
          </div>
        </div>

        <button
          onClick={() => {
            setPhase("quiz");
            window.scrollTo(0, 0);
          }}
          className="mt-14 w-full py-4 bg-black text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800"
        >
          Practice
        </button>
      </Shell>
    );

  /* ---------- quiz ---------- */
  if (phase === "quiz") {
    const qi = queue[0];
    const q = l.qs[qi];
    const answered = picked !== null;
    const correct = answered && picked === q.a;
    return (
      <Shell back={back} label={C[view.trackKey].name}>
        <div className="flex gap-1.5 mb-12">
          {l.qs.map((_, i) => (
            <div key={i} className={`h-1 flex-1 ${mastered[i] ? "bg-black" : "bg-neutral-200"}`} />
          ))}
        </div>

        <p style={serif} className="text-2xl leading-snug mb-8">
          {q.q}
        </p>

        <div className="space-y-2 mb-8">
          {q.opts.map((o, i) => {
            let cls = "border-neutral-300 hover:border-black";
            if (answered) {
              if (i === q.a) cls = "border-black bg-black text-white";
              else if (i === picked) cls = "border-neutral-300 text-neutral-400 line-through";
              else cls = "border-neutral-200 text-neutral-300";
            }
            return (
              <button
                key={i}
                onClick={() => picked === null && setPicked(i)}
                disabled={answered}
                className={`w-full text-left px-4 py-3.5 border ${cls}`}
              >
                {o}
              </button>
            );
          })}
        </div>

        {answered && (
          <>
            <p className="text-sm font-semibold mb-2">{correct ? "Correct." : "Not yet — this returns later in the set."}</p>
            <p className="text-[15px] text-neutral-700 leading-[1.7] mb-8">{q.why}</p>
            <button
              onClick={next}
              className="w-full py-4 bg-black text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800"
            >
              Continue
            </button>
          </>
        )}

        <p className="mt-10 text-xs text-neutral-400 text-center">
          {Object.keys(mastered).length} of {l.qs.length} mastered · every question must be answered correctly
        </p>
      </Shell>
    );
  }

  /* ---------- done ---------- */
  const flat = allLessons(view.trackKey);
  const i = flat.findIndex((x) => x.id === l.id);
  const nx = flat[i + 1];
  return (
    <Shell back={back} label={C[view.trackKey].name}>
      <div className="py-20 text-center">
        <p style={serif} className="text-4xl mb-3">
          Mastered
        </p>
        <p className="text-neutral-500 mb-14">{l.title}</p>
        {nx ? (
          <button
            onClick={() => open(view.trackKey, nx)}
            className="w-full py-4 bg-black text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800"
          >
            Next · {nx.title}
          </button>
        ) : (
          <p className="text-sm text-neutral-500">Track complete.</p>
        )}
        <button onClick={() => { setPhase("read"); window.scrollTo(0, 0); }} className="mt-6 text-xs text-neutral-400 hover:text-black">
          Reread this lesson
        </button>
      </div>
    </Shell>
  );
}
