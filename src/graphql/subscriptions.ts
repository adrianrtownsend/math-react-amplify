/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateAssignment = /* GraphQL */ `
  subscription OnCreateAssignment {
    onCreateAssignment {
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
export const onUpdateAssignment = /* GraphQL */ `
  subscription OnUpdateAssignment {
    onUpdateAssignment {
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
export const onDeleteAssignment = /* GraphQL */ `
  subscription OnDeleteAssignment {
    onDeleteAssignment {
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
export const onCreateClassStudent = /* GraphQL */ `
  subscription OnCreateClassStudent {
    onCreateClassStudent {
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
export const onUpdateClassStudent = /* GraphQL */ `
  subscription OnUpdateClassStudent {
    onUpdateClassStudent {
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
export const onDeleteClassStudent = /* GraphQL */ `
  subscription OnDeleteClassStudent {
    onDeleteClassStudent {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass($owner: String) {
    onCreateClass(owner: $owner) {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass($owner: String) {
    onUpdateClass(owner: $owner) {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass($owner: String) {
    onDeleteClass(owner: $owner) {
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
export const onCreateSessionStudent = /* GraphQL */ `
  subscription OnCreateSessionStudent {
    onCreateSessionStudent {
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
export const onUpdateSessionStudent = /* GraphQL */ `
  subscription OnUpdateSessionStudent {
    onUpdateSessionStudent {
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
export const onDeleteSessionStudent = /* GraphQL */ `
  subscription OnDeleteSessionStudent {
    onDeleteSessionStudent {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession {
    onCreateSession {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession {
    onUpdateSession {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession {
    onDeleteSession {
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
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject {
    onCreateSubject {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject {
    onUpdateSubject {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject {
    onDeleteSubject {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($owner: String) {
    onCreateStudent(owner: $owner) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($owner: String) {
    onUpdateStudent(owner: $owner) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($owner: String) {
    onDeleteStudent(owner: $owner) {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($owner: String) {
    onCreateTeacher(owner: $owner) {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($owner: String) {
    onUpdateTeacher(owner: $owner) {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($owner: String) {
    onDeleteTeacher(owner: $owner) {
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
