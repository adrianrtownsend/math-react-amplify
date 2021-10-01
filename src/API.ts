/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAnswerInput = {
  id?: string | null,
  questionID: string,
  label: string,
  name: string,
  value: boolean,
  selected?: boolean | null,
};

export type ModelAnswerConditionInput = {
  questionID?: ModelIDInput | null,
  label?: ModelStringInput | null,
  name?: ModelStringInput | null,
  value?: ModelBooleanInput | null,
  selected?: ModelBooleanInput | null,
  and?: Array< ModelAnswerConditionInput | null > | null,
  or?: Array< ModelAnswerConditionInput | null > | null,
  not?: ModelAnswerConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Answer = {
  __typename: "Answer",
  id: string,
  questionID: string,
  label: string,
  name: string,
  value: boolean,
  selected?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAnswerInput = {
  id: string,
  questionID?: string | null,
  label?: string | null,
  name?: string | null,
  value?: boolean | null,
  selected?: boolean | null,
};

export type DeleteAnswerInput = {
  id: string,
};

export type CreateQuestionInput = {
  id?: string | null,
  assignmentID: string,
  name: string,
};

export type ModelQuestionConditionInput = {
  assignmentID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
};

export type Question = {
  __typename: "Question",
  id: string,
  assignmentID: string,
  name: string,
  answers?: ModelAnswerConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAnswerConnection = {
  __typename: "ModelAnswerConnection",
  items?:  Array<Answer | null > | null,
  nextToken?: string | null,
};

export type UpdateQuestionInput = {
  id: string,
  assignmentID?: string | null,
  name?: string | null,
};

export type DeleteQuestionInput = {
  id: string,
};

export type CreateAssignmentInput = {
  id?: string | null,
  classID: string,
  name: string,
  data: string,
  status: ModelAssignmentStatus,
  timeLimit: number,
  isDeleted: boolean,
};

export enum ModelAssignmentStatus {
  open = "open",
  closed = "closed",
}


export type ModelAssignmentConditionInput = {
  classID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  status?: ModelModelAssignmentStatusInput | null,
  timeLimit?: ModelIntInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelAssignmentConditionInput | null > | null,
  or?: Array< ModelAssignmentConditionInput | null > | null,
  not?: ModelAssignmentConditionInput | null,
};

export type ModelModelAssignmentStatusInput = {
  eq?: ModelAssignmentStatus | null,
  ne?: ModelAssignmentStatus | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Assignment = {
  __typename: "Assignment",
  id: string,
  classID: string,
  name: string,
  data: string,
  status: ModelAssignmentStatus,
  questions?: ModelQuestionConnection | null,
  timeLimit: number,
  sessions?: ModelSessionConnection | null,
  isDeleted: boolean,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items?:  Array<Question | null > | null,
  nextToken?: string | null,
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection",
  items?:  Array<Session | null > | null,
  nextToken?: string | null,
};

export type Session = {
  __typename: "Session",
  id: string,
  assignmentID: string,
  name: string,
  data: string,
  status: ModelSessionStatus,
  students?: ModelSessionStudentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum ModelSessionStatus {
  open = "open",
  active = "active",
  closed = "closed",
}


export type ModelSessionStudentConnection = {
  __typename: "ModelSessionStudentConnection",
  items?:  Array<SessionStudent | null > | null,
  nextToken?: string | null,
};

export type SessionStudent = {
  __typename: "SessionStudent",
  id: string,
  sessionID: string,
  studentID: string,
  scoreID: string,
  session: Session,
  student: Student,
  code: ModelSessionStudentCode,
  score: number,
  status: ModelSessionStudentStatus,
  position: number,
  createdAt: string,
  updatedAt: string,
};

export type Student = {
  __typename: "Student",
  id: string,
  email: string,
  username: string,
  first: string,
  last: string,
  password: string,
  image?: string | null,
  classes?: ModelClassStudentConnection | null,
  sessions?: ModelSessionStudentConnection | null,
  isDeleted: boolean,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelClassStudentConnection = {
  __typename: "ModelClassStudentConnection",
  items?:  Array<ClassStudent | null > | null,
  nextToken?: string | null,
};

export type ClassStudent = {
  __typename: "ClassStudent",
  id: string,
  classID: string,
  studentID: string,
  class: Class,
  student: Student,
  isDeleted: boolean,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Class = {
  __typename: "Class",
  id: string,
  name: string,
  code: string,
  studentLimit: number,
  status: ModelClassStatus,
  teacherID: string,
  subjectID: string,
  assignments?: ModelAssignmentConnection | null,
  students?: ModelClassStudentConnection | null,
  isDeleted: boolean,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum ModelClassStatus {
  inactive = "inactive",
  open = "open",
  active = "active",
  closed = "closed",
}


export type ModelAssignmentConnection = {
  __typename: "ModelAssignmentConnection",
  items?:  Array<Assignment | null > | null,
  nextToken?: string | null,
};

export enum ModelSessionStudentCode {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}


export enum ModelSessionStudentStatus {
  notReady = "notReady",
  ready = "ready",
  active = "active",
  done = "done",
  abandoned = "abandoned",
}


export type UpdateAssignmentInput = {
  id: string,
  classID?: string | null,
  name?: string | null,
  data?: string | null,
  status?: ModelAssignmentStatus | null,
  timeLimit?: number | null,
  isDeleted?: boolean | null,
};

export type DeleteAssignmentInput = {
  id: string,
};

export type CreateClassStudentInput = {
  id?: string | null,
  classID: string,
  studentID: string,
  isDeleted: boolean,
};

export type ModelClassStudentConditionInput = {
  classID?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelClassStudentConditionInput | null > | null,
  or?: Array< ModelClassStudentConditionInput | null > | null,
  not?: ModelClassStudentConditionInput | null,
};

export type UpdateClassStudentInput = {
  id: string,
  classID?: string | null,
  studentID?: string | null,
  isDeleted?: boolean | null,
};

export type DeleteClassStudentInput = {
  id: string,
};

export type CreateClassInput = {
  id?: string | null,
  name: string,
  code: string,
  studentLimit: number,
  status: ModelClassStatus,
  teacherID: string,
  subjectID: string,
  isDeleted: boolean,
};

export type ModelClassConditionInput = {
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  studentLimit?: ModelIntInput | null,
  status?: ModelModelClassStatusInput | null,
  teacherID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
};

export type ModelModelClassStatusInput = {
  eq?: ModelClassStatus | null,
  ne?: ModelClassStatus | null,
};

export type UpdateClassInput = {
  id: string,
  name?: string | null,
  code?: string | null,
  studentLimit?: number | null,
  status?: ModelClassStatus | null,
  teacherID?: string | null,
  subjectID?: string | null,
  isDeleted?: boolean | null,
};

export type DeleteClassInput = {
  id: string,
};

export type CreateSessionStudentInput = {
  id?: string | null,
  sessionID: string,
  studentID: string,
  scoreID: string,
  code: ModelSessionStudentCode,
  score: number,
  status: ModelSessionStudentStatus,
  position: number,
};

export type ModelSessionStudentConditionInput = {
  sessionID?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  scoreID?: ModelIDInput | null,
  code?: ModelModelSessionStudentCodeInput | null,
  score?: ModelIntInput | null,
  status?: ModelModelSessionStudentStatusInput | null,
  position?: ModelIntInput | null,
  and?: Array< ModelSessionStudentConditionInput | null > | null,
  or?: Array< ModelSessionStudentConditionInput | null > | null,
  not?: ModelSessionStudentConditionInput | null,
};

export type ModelModelSessionStudentCodeInput = {
  eq?: ModelSessionStudentCode | null,
  ne?: ModelSessionStudentCode | null,
};

export type ModelModelSessionStudentStatusInput = {
  eq?: ModelSessionStudentStatus | null,
  ne?: ModelSessionStudentStatus | null,
};

export type UpdateSessionStudentInput = {
  id: string,
  sessionID?: string | null,
  studentID?: string | null,
  scoreID?: string | null,
  code?: ModelSessionStudentCode | null,
  score?: number | null,
  status?: ModelSessionStudentStatus | null,
  position?: number | null,
};

export type DeleteSessionStudentInput = {
  id: string,
};

export type CreateSessionInput = {
  id?: string | null,
  assignmentID: string,
  name: string,
  data: string,
  status: ModelSessionStatus,
};

export type ModelSessionConditionInput = {
  assignmentID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  status?: ModelModelSessionStatusInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
};

export type ModelModelSessionStatusInput = {
  eq?: ModelSessionStatus | null,
  ne?: ModelSessionStatus | null,
};

export type UpdateSessionInput = {
  id: string,
  assignmentID?: string | null,
  name?: string | null,
  data?: string | null,
  status?: ModelSessionStatus | null,
};

export type DeleteSessionInput = {
  id: string,
};

export type CreateSubjectInput = {
  id?: string | null,
  name: string,
  code: string,
};

export type ModelSubjectConditionInput = {
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  and?: Array< ModelSubjectConditionInput | null > | null,
  or?: Array< ModelSubjectConditionInput | null > | null,
  not?: ModelSubjectConditionInput | null,
};

export type Subject = {
  __typename: "Subject",
  id: string,
  name: string,
  code: string,
  classes?: ModelClassConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items?:  Array<Class | null > | null,
  nextToken?: string | null,
};

export type UpdateSubjectInput = {
  id: string,
  name?: string | null,
  code?: string | null,
};

export type DeleteSubjectInput = {
  id: string,
};

export type CreateStudentInput = {
  id?: string | null,
  email: string,
  username: string,
  first: string,
  last: string,
  password: string,
  image?: string | null,
  isDeleted: boolean,
};

export type ModelStudentConditionInput = {
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  first?: ModelStringInput | null,
  last?: ModelStringInput | null,
  password?: ModelStringInput | null,
  image?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
};

export type UpdateStudentInput = {
  id: string,
  email?: string | null,
  username?: string | null,
  first?: string | null,
  last?: string | null,
  password?: string | null,
  image?: string | null,
  isDeleted?: boolean | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateTeacherInput = {
  id?: string | null,
  email: string,
  username: string,
  first: string,
  last: string,
  password: string,
  image?: string | null,
  suffix?: ModelUserSuffix | null,
  isDeleted: boolean,
};

export enum ModelUserSuffix {
  Mr = "Mr",
  Mrs = "Mrs",
  Ms = "Ms",
}


export type ModelTeacherConditionInput = {
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  first?: ModelStringInput | null,
  last?: ModelStringInput | null,
  password?: ModelStringInput | null,
  image?: ModelStringInput | null,
  suffix?: ModelModelUserSuffixInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelTeacherConditionInput | null > | null,
  or?: Array< ModelTeacherConditionInput | null > | null,
  not?: ModelTeacherConditionInput | null,
};

export type ModelModelUserSuffixInput = {
  eq?: ModelUserSuffix | null,
  ne?: ModelUserSuffix | null,
};

export type Teacher = {
  __typename: "Teacher",
  id: string,
  email: string,
  username: string,
  first: string,
  last: string,
  password: string,
  image?: string | null,
  classes?: ModelClassConnection | null,
  suffix?: ModelUserSuffix | null,
  isDeleted: boolean,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateTeacherInput = {
  id: string,
  email?: string | null,
  username?: string | null,
  first?: string | null,
  last?: string | null,
  password?: string | null,
  image?: string | null,
  suffix?: ModelUserSuffix | null,
  isDeleted?: boolean | null,
};

export type DeleteTeacherInput = {
  id: string,
};

export type ModelAnswerFilterInput = {
  id?: ModelIDInput | null,
  questionID?: ModelIDInput | null,
  label?: ModelStringInput | null,
  name?: ModelStringInput | null,
  value?: ModelBooleanInput | null,
  selected?: ModelBooleanInput | null,
  and?: Array< ModelAnswerFilterInput | null > | null,
  or?: Array< ModelAnswerFilterInput | null > | null,
  not?: ModelAnswerFilterInput | null,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  assignmentID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
};

export type ModelAssignmentFilterInput = {
  id?: ModelIDInput | null,
  classID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  status?: ModelModelAssignmentStatusInput | null,
  timeLimit?: ModelIntInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelAssignmentFilterInput | null > | null,
  or?: Array< ModelAssignmentFilterInput | null > | null,
  not?: ModelAssignmentFilterInput | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  studentLimit?: ModelIntInput | null,
  status?: ModelModelClassStatusInput | null,
  teacherID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  assignmentID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  data?: ModelStringInput | null,
  status?: ModelModelSessionStatusInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
};

export type ModelSubjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  and?: Array< ModelSubjectFilterInput | null > | null,
  or?: Array< ModelSubjectFilterInput | null > | null,
  not?: ModelSubjectFilterInput | null,
};

export type ModelSubjectConnection = {
  __typename: "ModelSubjectConnection",
  items?:  Array<Subject | null > | null,
  nextToken?: string | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  first?: ModelStringInput | null,
  last?: ModelStringInput | null,
  password?: ModelStringInput | null,
  image?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items?:  Array<Student | null > | null,
  nextToken?: string | null,
};

export type ModelTeacherFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  first?: ModelStringInput | null,
  last?: ModelStringInput | null,
  password?: ModelStringInput | null,
  image?: ModelStringInput | null,
  suffix?: ModelModelUserSuffixInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelTeacherFilterInput | null > | null,
  or?: Array< ModelTeacherFilterInput | null > | null,
  not?: ModelTeacherFilterInput | null,
};

export type ModelTeacherConnection = {
  __typename: "ModelTeacherConnection",
  items?:  Array<Teacher | null > | null,
  nextToken?: string | null,
};

export type CreateAnswerMutationVariables = {
  input: CreateAnswerInput,
  condition?: ModelAnswerConditionInput | null,
};

export type CreateAnswerMutation = {
  createAnswer?:  {
    __typename: "Answer",
    id: string,
    questionID: string,
    label: string,
    name: string,
    value: boolean,
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAnswerMutationVariables = {
  input: UpdateAnswerInput,
  condition?: ModelAnswerConditionInput | null,
};

export type UpdateAnswerMutation = {
  updateAnswer?:  {
    __typename: "Answer",
    id: string,
    questionID: string,
    label: string,
    name: string,
    value: boolean,
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAnswerMutationVariables = {
  input: DeleteAnswerInput,
  condition?: ModelAnswerConditionInput | null,
};

export type DeleteAnswerMutation = {
  deleteAnswer?:  {
    __typename: "Answer",
    id: string,
    questionID: string,
    label: string,
    name: string,
    value: boolean,
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    id: string,
    assignmentID: string,
    name: string,
    answers?:  {
      __typename: "ModelAnswerConnection",
      items?:  Array< {
        __typename: "Answer",
        id: string,
        questionID: string,
        label: string,
        name: string,
        value: boolean,
        selected?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    id: string,
    assignmentID: string,
    name: string,
    answers?:  {
      __typename: "ModelAnswerConnection",
      items?:  Array< {
        __typename: "Answer",
        id: string,
        questionID: string,
        label: string,
        name: string,
        value: boolean,
        selected?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    id: string,
    assignmentID: string,
    name: string,
    answers?:  {
      __typename: "ModelAnswerConnection",
      items?:  Array< {
        __typename: "Answer",
        id: string,
        questionID: string,
        label: string,
        name: string,
        value: boolean,
        selected?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAssignmentMutationVariables = {
  input: CreateAssignmentInput,
  condition?: ModelAssignmentConditionInput | null,
};

export type CreateAssignmentMutation = {
  createAssignment?:  {
    __typename: "Assignment",
    id: string,
    classID: string,
    name: string,
    data: string,
    status: ModelAssignmentStatus,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        assignmentID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    timeLimit: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items?:  Array< {
        __typename: "Session",
        id: string,
        assignmentID: string,
        name: string,
        data: string,
        status: ModelSessionStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAssignmentMutationVariables = {
  input: UpdateAssignmentInput,
  condition?: ModelAssignmentConditionInput | null,
};

export type UpdateAssignmentMutation = {
  updateAssignment?:  {
    __typename: "Assignment",
    id: string,
    classID: string,
    name: string,
    data: string,
    status: ModelAssignmentStatus,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        assignmentID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    timeLimit: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items?:  Array< {
        __typename: "Session",
        id: string,
        assignmentID: string,
        name: string,
        data: string,
        status: ModelSessionStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAssignmentMutationVariables = {
  input: DeleteAssignmentInput,
  condition?: ModelAssignmentConditionInput | null,
};

export type DeleteAssignmentMutation = {
  deleteAssignment?:  {
    __typename: "Assignment",
    id: string,
    classID: string,
    name: string,
    data: string,
    status: ModelAssignmentStatus,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        assignmentID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    timeLimit: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items?:  Array< {
        __typename: "Session",
        id: string,
        assignmentID: string,
        name: string,
        data: string,
        status: ModelSessionStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateClassStudentMutationVariables = {
  input: CreateClassStudentInput,
  condition?: ModelClassStudentConditionInput | null,
};

export type CreateClassStudentMutation = {
  createClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    classID: string,
    studentID: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      studentLimit: number,
      status: ModelClassStatus,
      teacherID: string,
      subjectID: string,
      assignments?:  {
        __typename: "ModelAssignmentConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateClassStudentMutationVariables = {
  input: UpdateClassStudentInput,
  condition?: ModelClassStudentConditionInput | null,
};

export type UpdateClassStudentMutation = {
  updateClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    classID: string,
    studentID: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      studentLimit: number,
      status: ModelClassStatus,
      teacherID: string,
      subjectID: string,
      assignments?:  {
        __typename: "ModelAssignmentConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteClassStudentMutationVariables = {
  input: DeleteClassStudentInput,
  condition?: ModelClassStudentConditionInput | null,
};

export type DeleteClassStudentMutation = {
  deleteClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    classID: string,
    studentID: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      studentLimit: number,
      status: ModelClassStatus,
      teacherID: string,
      subjectID: string,
      assignments?:  {
        __typename: "ModelAssignmentConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateClassMutationVariables = {
  input: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    studentLimit: number,
    status: ModelClassStatus,
    teacherID: string,
    subjectID: string,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        classID: string,
        name: string,
        data: string,
        status: ModelAssignmentStatus,
        timeLimit: number,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    studentLimit: number,
    status: ModelClassStatus,
    teacherID: string,
    subjectID: string,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        classID: string,
        name: string,
        data: string,
        status: ModelAssignmentStatus,
        timeLimit: number,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    studentLimit: number,
    status: ModelClassStatus,
    teacherID: string,
    subjectID: string,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        classID: string,
        name: string,
        data: string,
        status: ModelAssignmentStatus,
        timeLimit: number,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSessionStudentMutationVariables = {
  input: CreateSessionStudentInput,
  condition?: ModelSessionStudentConditionInput | null,
};

export type CreateSessionStudentMutation = {
  createSessionStudent?:  {
    __typename: "SessionStudent",
    id: string,
    sessionID: string,
    studentID: string,
    scoreID: string,
    session:  {
      __typename: "Session",
      id: string,
      assignmentID: string,
      name: string,
      data: string,
      status: ModelSessionStatus,
      students?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    code: ModelSessionStudentCode,
    score: number,
    status: ModelSessionStudentStatus,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSessionStudentMutationVariables = {
  input: UpdateSessionStudentInput,
  condition?: ModelSessionStudentConditionInput | null,
};

export type UpdateSessionStudentMutation = {
  updateSessionStudent?:  {
    __typename: "SessionStudent",
    id: string,
    sessionID: string,
    studentID: string,
    scoreID: string,
    session:  {
      __typename: "Session",
      id: string,
      assignmentID: string,
      name: string,
      data: string,
      status: ModelSessionStatus,
      students?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    code: ModelSessionStudentCode,
    score: number,
    status: ModelSessionStudentStatus,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSessionStudentMutationVariables = {
  input: DeleteSessionStudentInput,
  condition?: ModelSessionStudentConditionInput | null,
};

export type DeleteSessionStudentMutation = {
  deleteSessionStudent?:  {
    __typename: "SessionStudent",
    id: string,
    sessionID: string,
    studentID: string,
    scoreID: string,
    session:  {
      __typename: "Session",
      id: string,
      assignmentID: string,
      name: string,
      data: string,
      status: ModelSessionStatus,
      students?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    code: ModelSessionStudentCode,
    score: number,
    status: ModelSessionStudentStatus,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type CreateSessionMutation = {
  createSession?:  {
    __typename: "Session",
    id: string,
    assignmentID: string,
    name: string,
    data: string,
    status: ModelSessionStatus,
    students?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type UpdateSessionMutation = {
  updateSession?:  {
    __typename: "Session",
    id: string,
    assignmentID: string,
    name: string,
    data: string,
    status: ModelSessionStatus,
    students?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type DeleteSessionMutation = {
  deleteSession?:  {
    __typename: "Session",
    id: string,
    assignmentID: string,
    name: string,
    data: string,
    status: ModelSessionStatus,
    students?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubjectMutationVariables = {
  input: CreateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type CreateSubjectMutation = {
  createSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    code: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubjectMutationVariables = {
  input: UpdateSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type UpdateSubjectMutation = {
  updateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    code: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubjectMutationVariables = {
  input: DeleteSubjectInput,
  condition?: ModelSubjectConditionInput | null,
};

export type DeleteSubjectMutation = {
  deleteSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    code: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTeacherMutationVariables = {
  input: CreateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type CreateTeacherMutation = {
  createTeacher?:  {
    __typename: "Teacher",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    suffix?: ModelUserSuffix | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTeacherMutationVariables = {
  input: UpdateTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type UpdateTeacherMutation = {
  updateTeacher?:  {
    __typename: "Teacher",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    suffix?: ModelUserSuffix | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTeacherMutationVariables = {
  input: DeleteTeacherInput,
  condition?: ModelTeacherConditionInput | null,
};

export type DeleteTeacherMutation = {
  deleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    suffix?: ModelUserSuffix | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetAnswerQueryVariables = {
  id: string,
};

export type GetAnswerQuery = {
  getAnswer?:  {
    __typename: "Answer",
    id: string,
    questionID: string,
    label: string,
    name: string,
    value: boolean,
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAnswersQueryVariables = {
  filter?: ModelAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnswersQuery = {
  listAnswers?:  {
    __typename: "ModelAnswerConnection",
    items?:  Array< {
      __typename: "Answer",
      id: string,
      questionID: string,
      label: string,
      name: string,
      value: boolean,
      selected?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    id: string,
    assignmentID: string,
    name: string,
    answers?:  {
      __typename: "ModelAnswerConnection",
      items?:  Array< {
        __typename: "Answer",
        id: string,
        questionID: string,
        label: string,
        name: string,
        value: boolean,
        selected?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items?:  Array< {
      __typename: "Question",
      id: string,
      assignmentID: string,
      name: string,
      answers?:  {
        __typename: "ModelAnswerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAssignmentQueryVariables = {
  id: string,
};

export type GetAssignmentQuery = {
  getAssignment?:  {
    __typename: "Assignment",
    id: string,
    classID: string,
    name: string,
    data: string,
    status: ModelAssignmentStatus,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        assignmentID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    timeLimit: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items?:  Array< {
        __typename: "Session",
        id: string,
        assignmentID: string,
        name: string,
        data: string,
        status: ModelSessionStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAssignmentsQueryVariables = {
  filter?: ModelAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssignmentsQuery = {
  listAssignments?:  {
    __typename: "ModelAssignmentConnection",
    items?:  Array< {
      __typename: "Assignment",
      id: string,
      classID: string,
      name: string,
      data: string,
      status: ModelAssignmentStatus,
      questions?:  {
        __typename: "ModelQuestionConnection",
        nextToken?: string | null,
      } | null,
      timeLimit: number,
      sessions?:  {
        __typename: "ModelSessionConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    studentLimit: number,
    status: ModelClassStatus,
    teacherID: string,
    subjectID: string,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        classID: string,
        name: string,
        data: string,
        status: ModelAssignmentStatus,
        timeLimit: number,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items?:  Array< {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      studentLimit: number,
      status: ModelClassStatus,
      teacherID: string,
      subjectID: string,
      assignments?:  {
        __typename: "ModelAssignmentConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession?:  {
    __typename: "Session",
    id: string,
    assignmentID: string,
    name: string,
    data: string,
    status: ModelSessionStatus,
    students?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions?:  {
    __typename: "ModelSessionConnection",
    items?:  Array< {
      __typename: "Session",
      id: string,
      assignmentID: string,
      name: string,
      data: string,
      status: ModelSessionStatus,
      students?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSubjectQueryVariables = {
  id: string,
};

export type GetSubjectQuery = {
  getSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    code: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubjectsQueryVariables = {
  filter?: ModelSubjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubjectsQuery = {
  listSubjects?:  {
    __typename: "ModelSubjectConnection",
    items?:  Array< {
      __typename: "Subject",
      id: string,
      name: string,
      code: string,
      classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items?:  Array< {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTeacherQueryVariables = {
  id: string,
};

export type GetTeacherQuery = {
  getTeacher?:  {
    __typename: "Teacher",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    suffix?: ModelUserSuffix | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTeachersQueryVariables = {
  filter?: ModelTeacherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeachersQuery = {
  listTeachers?:  {
    __typename: "ModelTeacherConnection",
    items?:  Array< {
      __typename: "Teacher",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      suffix?: ModelUserSuffix | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAnswerSubscription = {
  onCreateAnswer?:  {
    __typename: "Answer",
    id: string,
    questionID: string,
    label: string,
    name: string,
    value: boolean,
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAnswerSubscription = {
  onUpdateAnswer?:  {
    __typename: "Answer",
    id: string,
    questionID: string,
    label: string,
    name: string,
    value: boolean,
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAnswerSubscription = {
  onDeleteAnswer?:  {
    __typename: "Answer",
    id: string,
    questionID: string,
    label: string,
    name: string,
    value: boolean,
    selected?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    id: string,
    assignmentID: string,
    name: string,
    answers?:  {
      __typename: "ModelAnswerConnection",
      items?:  Array< {
        __typename: "Answer",
        id: string,
        questionID: string,
        label: string,
        name: string,
        value: boolean,
        selected?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    id: string,
    assignmentID: string,
    name: string,
    answers?:  {
      __typename: "ModelAnswerConnection",
      items?:  Array< {
        __typename: "Answer",
        id: string,
        questionID: string,
        label: string,
        name: string,
        value: boolean,
        selected?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    id: string,
    assignmentID: string,
    name: string,
    answers?:  {
      __typename: "ModelAnswerConnection",
      items?:  Array< {
        __typename: "Answer",
        id: string,
        questionID: string,
        label: string,
        name: string,
        value: boolean,
        selected?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAssignmentSubscription = {
  onCreateAssignment?:  {
    __typename: "Assignment",
    id: string,
    classID: string,
    name: string,
    data: string,
    status: ModelAssignmentStatus,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        assignmentID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    timeLimit: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items?:  Array< {
        __typename: "Session",
        id: string,
        assignmentID: string,
        name: string,
        data: string,
        status: ModelSessionStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAssignmentSubscription = {
  onUpdateAssignment?:  {
    __typename: "Assignment",
    id: string,
    classID: string,
    name: string,
    data: string,
    status: ModelAssignmentStatus,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        assignmentID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    timeLimit: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items?:  Array< {
        __typename: "Session",
        id: string,
        assignmentID: string,
        name: string,
        data: string,
        status: ModelSessionStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAssignmentSubscription = {
  onDeleteAssignment?:  {
    __typename: "Assignment",
    id: string,
    classID: string,
    name: string,
    data: string,
    status: ModelAssignmentStatus,
    questions?:  {
      __typename: "ModelQuestionConnection",
      items?:  Array< {
        __typename: "Question",
        id: string,
        assignmentID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    timeLimit: number,
    sessions?:  {
      __typename: "ModelSessionConnection",
      items?:  Array< {
        __typename: "Session",
        id: string,
        assignmentID: string,
        name: string,
        data: string,
        status: ModelSessionStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateClassStudentSubscription = {
  onCreateClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    classID: string,
    studentID: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      studentLimit: number,
      status: ModelClassStatus,
      teacherID: string,
      subjectID: string,
      assignments?:  {
        __typename: "ModelAssignmentConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateClassStudentSubscription = {
  onUpdateClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    classID: string,
    studentID: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      studentLimit: number,
      status: ModelClassStatus,
      teacherID: string,
      subjectID: string,
      assignments?:  {
        __typename: "ModelAssignmentConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteClassStudentSubscription = {
  onDeleteClassStudent?:  {
    __typename: "ClassStudent",
    id: string,
    classID: string,
    studentID: string,
    class:  {
      __typename: "Class",
      id: string,
      name: string,
      code: string,
      studentLimit: number,
      status: ModelClassStatus,
      teacherID: string,
      subjectID: string,
      assignments?:  {
        __typename: "ModelAssignmentConnection",
        nextToken?: string | null,
      } | null,
      students?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateClassSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    studentLimit: number,
    status: ModelClassStatus,
    teacherID: string,
    subjectID: string,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        classID: string,
        name: string,
        data: string,
        status: ModelAssignmentStatus,
        timeLimit: number,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateClassSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    studentLimit: number,
    status: ModelClassStatus,
    teacherID: string,
    subjectID: string,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        classID: string,
        name: string,
        data: string,
        status: ModelAssignmentStatus,
        timeLimit: number,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteClassSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    name: string,
    code: string,
    studentLimit: number,
    status: ModelClassStatus,
    teacherID: string,
    subjectID: string,
    assignments?:  {
      __typename: "ModelAssignmentConnection",
      items?:  Array< {
        __typename: "Assignment",
        id: string,
        classID: string,
        name: string,
        data: string,
        status: ModelAssignmentStatus,
        timeLimit: number,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    students?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSessionStudentSubscription = {
  onCreateSessionStudent?:  {
    __typename: "SessionStudent",
    id: string,
    sessionID: string,
    studentID: string,
    scoreID: string,
    session:  {
      __typename: "Session",
      id: string,
      assignmentID: string,
      name: string,
      data: string,
      status: ModelSessionStatus,
      students?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    code: ModelSessionStudentCode,
    score: number,
    status: ModelSessionStudentStatus,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSessionStudentSubscription = {
  onUpdateSessionStudent?:  {
    __typename: "SessionStudent",
    id: string,
    sessionID: string,
    studentID: string,
    scoreID: string,
    session:  {
      __typename: "Session",
      id: string,
      assignmentID: string,
      name: string,
      data: string,
      status: ModelSessionStatus,
      students?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    code: ModelSessionStudentCode,
    score: number,
    status: ModelSessionStudentStatus,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSessionStudentSubscription = {
  onDeleteSessionStudent?:  {
    __typename: "SessionStudent",
    id: string,
    sessionID: string,
    studentID: string,
    scoreID: string,
    session:  {
      __typename: "Session",
      id: string,
      assignmentID: string,
      name: string,
      data: string,
      status: ModelSessionStatus,
      students?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    student:  {
      __typename: "Student",
      id: string,
      email: string,
      username: string,
      first: string,
      last: string,
      password: string,
      image?: string | null,
      classes?:  {
        __typename: "ModelClassStudentConnection",
        nextToken?: string | null,
      } | null,
      sessions?:  {
        __typename: "ModelSessionStudentConnection",
        nextToken?: string | null,
      } | null,
      isDeleted: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    code: ModelSessionStudentCode,
    score: number,
    status: ModelSessionStudentStatus,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
    __typename: "Session",
    id: string,
    assignmentID: string,
    name: string,
    data: string,
    status: ModelSessionStatus,
    students?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession?:  {
    __typename: "Session",
    id: string,
    assignmentID: string,
    name: string,
    data: string,
    status: ModelSessionStatus,
    students?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession?:  {
    __typename: "Session",
    id: string,
    assignmentID: string,
    name: string,
    data: string,
    status: ModelSessionStatus,
    students?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubjectSubscription = {
  onCreateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    code: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubjectSubscription = {
  onUpdateSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    code: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubjectSubscription = {
  onDeleteSubject?:  {
    __typename: "Subject",
    id: string,
    name: string,
    code: string,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassStudentConnection",
      items?:  Array< {
        __typename: "ClassStudent",
        id: string,
        classID: string,
        studentID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionStudentConnection",
      items?:  Array< {
        __typename: "SessionStudent",
        id: string,
        sessionID: string,
        studentID: string,
        scoreID: string,
        code: ModelSessionStudentCode,
        score: number,
        status: ModelSessionStudentStatus,
        position: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTeacherSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTeacherSubscription = {
  onCreateTeacher?:  {
    __typename: "Teacher",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    suffix?: ModelUserSuffix | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTeacherSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTeacherSubscription = {
  onUpdateTeacher?:  {
    __typename: "Teacher",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    suffix?: ModelUserSuffix | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTeacherSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTeacherSubscription = {
  onDeleteTeacher?:  {
    __typename: "Teacher",
    id: string,
    email: string,
    username: string,
    first: string,
    last: string,
    password: string,
    image?: string | null,
    classes?:  {
      __typename: "ModelClassConnection",
      items?:  Array< {
        __typename: "Class",
        id: string,
        name: string,
        code: string,
        studentLimit: number,
        status: ModelClassStatus,
        teacherID: string,
        subjectID: string,
        isDeleted: boolean,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    suffix?: ModelUserSuffix | null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
