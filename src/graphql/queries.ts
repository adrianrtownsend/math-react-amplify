/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
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
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        assignmentID
        name
        answers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssignment = /* GraphQL */ `
  query GetAssignment($id: ID!) {
    getAssignment(id: $id) {
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
export const listAssignments = /* GraphQL */ `
  query ListAssignments(
    $filter: ModelAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        classID
        name
        data
        status
        questions {
          nextToken
        }
        timeLimit
        sessions {
          nextToken
        }
        isDeleted
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
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
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        code
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
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
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        suffix
        isDeleted
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
