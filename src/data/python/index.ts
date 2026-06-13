import { Module } from "../../types/roadmap";

import { fundamentals } from "./fundamentals";
import { memory } from "./memory";
import { datatypes } from "./datatypes";
import { operators } from "./operators";
import { controlflow } from "./controlflow";
import { strings } from "./strings";
import { collections } from "./collections";
import { comprehensions } from "./comprehensions";
import { functions } from "./functions";
import { modules } from "./modules";
import { exceptions } from "./exceptions";
import { filehandling } from "./filehandling";
import { oops } from "./oops";
import { advancedOOP } from "./advanced_oop";
import { metaclasses } from "./metaclasses";
import { iterators } from "./iterators";
import { generators } from "./generators";
import { decorators } from "./decorators";
import { contextManagers } from "./contextmanagers";
import { typing } from "./typing";
import { concurrency } from "./concurrency";
import { asyncioSection } from "./asyncio";
import { bestPractices } from "./best_practices";
import { cExtensions } from "./c_extensions";
import { dataclasses } from "./dataclasses";
import { debugging } from "./debugging";
import { designPatterns } from "./design_pattern";
import { enums } from "./enums";
import { importSystem } from "./import_system";
import { loggingSection } from "./logging";
import { memoryManagement } from "./memory_management";
import { modernPython } from "./modern_python";
import { networking } from "./networking";
import { packaging } from "./packaging";
import { performance } from "./performance";
import { pythonInternals } from "./python_internals";
import { security } from "./security";
import { serialization } from "./serialization";
import { standardLibrary } from "./standard_library";
import { testing } from "./testing";
import { virtualEnvironments } from "./virtual_environments";

export const pythonModule: Module = {
  id: "python",
  title: "Python",

  sections: [
    fundamentals,
    memory,
    datatypes,
    operators,
    controlflow,
    strings,
    collections,
    comprehensions,
    functions,
    modules,
    exceptions,
    filehandling,
    oops,
    advancedOOP,
    metaclasses,
    iterators,
    generators,
    decorators,
    contextManagers,
    typing,
    concurrency,
    asyncioSection,
    bestPractices,
    cExtensions,
    dataclasses,
    debugging,
    designPatterns,
    enums,
    importSystem,
    loggingSection,
    memoryManagement,
    modernPython,
    networking,
    packaging,
    performance,
    pythonInternals,
    security,
    serialization,
    standardLibrary,
    testing,
    virtualEnvironments,
  ],
};