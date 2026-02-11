interface RegistrationStudent {
    fullName: string
    birthPlace: string
    birthDate: string
    gender: string
    previousSchool: string
}

interface RegistrationParent {
    fatherName: string
    motherName: string
    phone: string
    email: string
    address: string
}

interface RegistrationProgram {
    choice: string
}

interface RegistrationPayload {
    id: string
    createdAt: string
    status: string
    student: RegistrationStudent
    parent: RegistrationParent
    program: RegistrationProgram
}

interface PageMetaOptions {
    title: string
    description?: string
}