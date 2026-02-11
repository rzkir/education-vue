import { ref } from 'vue'

const STORAGE_KEY = 'ng-registration-latest'

export const useStateRegistration = () => {
    const form = ref({
        student: {
            fullName: '',
            birthPlace: '',
            birthDate: '',
            gender: '',
            previousSchool: '',
        } as RegistrationStudent,
        parent: {
            fatherName: '',
            motherName: '',
            phone: '',
            email: '',
            address: '',
        } as RegistrationParent,
        program: {
            choice: '',
        } as RegistrationProgram,
        agreement: false,
    })

    const saveToLocalStorage = () => {
        const timestamp = Date.now()
        const registrationId = `PPDB-2024-${String(timestamp).slice(-5)}`

        const payload: RegistrationPayload = {
            id: registrationId,
            createdAt: new Date(timestamp).toISOString(),
            status: 'menunggu-verifikasi',
            student: form.value.student,
            parent: form.value.parent,
            program: form.value.program,
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))

        return payload
    }

    const loadFromLocalStorage = () => {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return null
        try {
            return JSON.parse(raw) as RegistrationPayload
        } catch {
            return null
        }
    }

    return {
        form,
        saveToLocalStorage,
        loadFromLocalStorage,
    }
}

