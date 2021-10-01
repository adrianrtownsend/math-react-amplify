/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      questionID
      label
      name
      value
      selected
      createdAt
      updatedAt
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      questionID
      label
      name
      value
      selected
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      questionID
      label
      name
      value
      selected
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      assignmentID
      name
      answers {
        items {
          id
          questionID
          label
          name
          value
          selected
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      assignmentID
      name
      answers {
        items {
          id
          questionID
          label
          name
          value
          selected
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      assignmentID
      name
      answers {
        items {
          id
          questionID
          label
          name
          value
          selected
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAssignment = /* GraphQL */ `
  mutation CreateAssignment(
    $input: CreateAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    createAssignment(input: $input, condition: $condition) {
      id
      classID
      name
      data
      status
      questions {
        items {
          id
          assignmentID
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      timeLimit
      sessions {
        items {
          id
          assignmentID
          name
          data
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAssignment = /* GraphQL */ `
  mutation UpdateAssignment(
    $input: UpdateAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    updateAssignment(input: $input, condition: $condition) {
      id
      classID
      name
      data
      status
      questions {
        items {
          id
          assignmentID
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      timeLimit
      sessions {
        items {
          id
          assignmentID
          name
          data
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAssignment = /* GraphQL */ `
  mutation DeleteAssignment(
    $input: DeleteAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    deleteAssignment(input: $input, condition: $condition) {
      id
      classID
      name
      data
      status
      questions {
        items {
          id
          assignmentID
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      timeLimit
      sessions {
        items {
          id
          assignmentID
          name
          data
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createClassStudent = /* GraphQL */ `
  mutation CreateClassStudent(
    $input: CreateClassStudentInput!
    $condition: ModelClassStudentConditionInput
  ) {
    createClassStudent(input: $input, condition: $condition) {
      id
      classID
      studentID
      class {
        id
        name
        code
        studentLimit
        status
        teacherID
        subjectID
        assignments {
          nextToken
        }
        students {
          nextToken
        }
        isDeleted
        createdAt
        updatedAt
        owner
      }
      student {
        id
        email
        username
        first
        last
        password
        image
        classes {
          nextToken
        }
        sessions {
          nextToken
        }
        isDeleted
        createdAt
        updatedAt
        owner
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateClassStudent = /* GraphQL */ `
  mutation UpdateClassStudent(
    $input: UpdateClassStudentInput!
    $condition: ModelClassStudentConditionInput
  ) {
    updateClassStudent(input: $input, condition: $condition) {
      id
      classID
      studentID
      class {
        id
        name
        code
        studentLimit
        status
        teacherID
        subjectID
        assignments {
          nextToken
        }
        students {
          nextToken
        }
        isDeleted
        createdAt
        updatedAt
        owner
      }
      student {
        id
        email
        username
        first
        last
        password
        image
        classes {
          nextToken
        }
        sessions {
          nextToken
        }
        isDeleted
        createdAt
        updatedAt
        owner
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteClassStudent = /* GraphQL */ `
  mutation DeleteClassStudent(
    $input: DeleteClassStudentInput!
    $condition: ModelClassStudentConditionInput
  ) {
    deleteClassStudent(input: $input, condition: $condition) {
      id
      classID
      studentID
      class {
        id
        name
        code
        studentLimit
        status
        teacherID
        subjectID
        assignments {
          nextToken
        }
        students {
          nextToken
        }
        isDeleted
        createdAt
        updatedAt
        owner
      }
      student {
        id
        email
        username
        first
        last
        password
        image
        classes {
          nextToken
        }
        sessions {
          nextToken
        }
        isDeleted
        createdAt
        updatedAt
        owner
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      name
      code
      studentLimit
      status
      teacherID
      subjectID
      assignments {
        items {
          id
          classID
          name
          data
          status
          timeLimit
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      students {
        items {
          id
          classID
          studentID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      name
      code
      studentLimit
      status
      teacherID
      subjectID
      assignments {
        items {
          id
          classID
          name
          data
          status
          timeLimit
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      students {
        items {
          id
          classID
          studentID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      name
      code
      studentLimit
      status
      teacherID
      subjectID
      assignments {
        items {
          id
          classID
          name
          data
          status
          timeLimit
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      students {
        items {
          id
          classID
          studentID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSessionStudent = /* GraphQL */ `
  mutation CreateSessionStudent(
    $input: CreateSessionStudentInput!
    $condition: ModelSessionStudentConditionInput
  ) {
    createSessionStudent(input: $input, condition: $condition) {
      id
      sessionID
      studentID
      scoreID
      session {
        id
        assignmentID
        name
        data
        status
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        email
        username
        first
        last
        password
        image
        classes {
          nextToken
        }
        sessions {
          nextToken
        }
        isDeleted
        createdAt
        updatedAt
        owner
      }
      code
      score
      status
      position
      createdAt
      updatedAt
    }
  }
`;
export const updateSessionStudent = /* GraphQL */ `
  mutation UpdateSessionStudent(
    $input: UpdateSessionStudentInput!
    $condition: ModelSessionStudentConditionInput
  ) {
    updateSessionStudent(input: $input, condition: $condition) {
      id
      sessionID
      studentID
      scoreID
      session {
        id
        assignmentID
        name
        data
        status
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        email
        username
        first
        last
        password
        image
        classes {
          nextToken
        }
        sessions {
          nextToken
        }
        isDeleted
        createdAt
        updatedAt
        owner
      }
      code
      score
      status
      position
      createdAt
      updatedAt
    }
  }
`;
export const deleteSessionStudent = /* GraphQL */ `
  mutation DeleteSessionStudent(
    $input: DeleteSessionStudentInput!
    $condition: ModelSessionStudentConditionInput
  ) {
    deleteSessionStudent(input: $input, condition: $condition) {
      id
      sessionID
      studentID
      scoreID
      session {
        id
        assignmentID
        name
        data
        status
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      student {
        id
        email
        username
        first
        last
        password
        image
        classes {
          nextToken
        }
        sessions {
          nextToken
        }
        isDeleted
        createdAt
        updatedAt
        owner
      }
      code
      score
      status
      position
      createdAt
      updatedAt
    }
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
      id
      assignmentID
      name
      data
      status
      students {
        items {
          id
          sessionID
          studentID
          scoreID
          code
          score
          status
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
      id
      assignmentID
      name
      data
      status
      students {
        items {
          id
          sessionID
          studentID
          scoreID
          code
          score
          status
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
      id
      assignmentID
      name
      data
      status
      students {
        items {
          id
          sessionID
          studentID
          scoreID
          code
          score
          status
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
      id
      name
      code
      classes {
        items {
          id
          name
          code
          studentLimit
          status
          teacherID
          subjectID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
      id
      name
      code
      classes {
        items {
          id
          name
          code
          studentLimit
          status
          teacherID
          subjectID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
      id
      name
      code
      classes {
        items {
          id
          name
          code
          studentLimit
          status
          teacherID
          subjectID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      email
      username
      first
      last
      password
      image
      classes {
        items {
          id
          classID
          studentID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sessions {
        items {
          id
          sessionID
          studentID
          scoreID
          code
          score
          status
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      email
      username
      first
      last
      password
      image
      classes {
        items {
          id
          classID
          studentID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sessions {
        items {
          id
          sessionID
          studentID
          scoreID
          code
          score
          status
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      email
      username
      first
      last
      password
      image
      classes {
        items {
          id
          classID
          studentID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sessions {
        items {
          id
          sessionID
          studentID
          scoreID
          code
          score
          status
          position
          createdAt
          updatedAt
        }
        nextToken
      }
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      email
      username
      first
      last
      password
      image
      classes {
        items {
          id
          name
          code
          studentLimit
          status
          teacherID
          subjectID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      suffix
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      email
      username
      first
      last
      password
      image
      classes {
        items {
          id
          name
          code
          studentLimit
          status
          teacherID
          subjectID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      suffix
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      email
      username
      first
      last
      password
      image
      classes {
        items {
          id
          name
          code
          studentLimit
          status
          teacherID
          subjectID
          isDeleted
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      suffix
      isDeleted
      createdAt
      updatedAt
      owner
    }
  }
`;
