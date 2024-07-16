const baseUrl = "http://127.0.0.1/restful-api";
// const baseUrl = "https://notes-api.dicoding.dev/v2/";

class NotesApi {
    static async getAll() {

        try {
            const response = await fetch(`${baseUrl}/notes`);
            const responseJson = await response.json();
            return { response, responseJson };
        } catch (error) {
            console.log(error)
            return { error };
        }

    }

    static async getArchived() {
        try {
            const response_AR = await fetch(`${baseUrl}/notes/archived`);
            const responseJson_AR = await response_AR.json();
            return { response_AR, responseJson_AR };
        } catch (error_AR) {
            return { error_AR };
        }
    }

    static async getNoteById(id) {
        const response = await fetch(`${baseUrl}/notes/${id}`);

        if (!(response.status >= 200 && response.status < 300)) {
            throw new Error("Gagal Menampilkan Data");
        }

        const responseJson = await response.json();

        const { data: note } = responseJson;

        if (!note) {
            throw new Error('Catatan Tidak Ditemukan');
        }

        return note;
    }

    static async addNote(note) {
        try {
            const response = await fetch(`${baseUrl}/notes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(note),
            });

            const responseJson = await response.json();
            return { response, responseJson };
        } catch (error) {
            return { error };
        }
    }

    static async deleteNoteById(id) {
        try {
            const response = await fetch(`${baseUrl}/notes/${id}`, {
                method: "DELETE",
            });

            const responseJson = await response.json();
            console.log(`Response: ${response}, ResponseJSON : ${responseJson}`)

            return { response, responseJson };
        } catch (error) {
            return { error };
        }
    }

    static async archiveNoteById(id) {
        try {
            const response = await fetch(`${baseUrl}/notes/${id}/archive`, {
                method: "POST",
            });
            const responseJson = await response.json();
            console.log(`Response: ${response}, ResponseJSON : ${responseJson}`)
            return { response, responseJson };
        } catch (error) {
            return { error };
        }
    }

    static async unarchiveNoteById(id) {
        try {
            const response = await fetch(`${baseUrl}/notes/${id}/unarchive`, {
                method: "POST",
            });
            const responseJson = await response.json();
            console.log(`Response: ${response}, ResponseJSON : ${responseJson}`)
            return { response, responseJson };
        } catch (error) {
            return { error };
        }
    }


    static async editNoteById(id, newNoteData) {
        try {
            const {response: responseAdd, responseJson: responseJsonAdd} = await NotesApi.addNote(newNoteData);
            const { response, responseJson } = await NotesApi.deleteNoteById(id);

            console.log(responseAdd, responseJsonAdd)
            console.log( response, responseJson )
            return { responseAdd, responseJsonAdd, response, responseJson };
        } catch (error) {
            console.error(error);
            alert("Gagal Mengedit Catatan");
            return { error };
        }
    }

}

export default NotesApi;