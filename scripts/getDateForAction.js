const link =
    "https://api.github.com/repos/isuligoy/Mini-Proyects/actions/workflows/deploy.yml/runs";

export async function getDate() {
    try {
        const data = await fetch(link);
        const info = await data.json();
        const date = info.workflow_runs[0].created_at;
        return formatedDate({ date });
    } catch (err) {
        console.log(err);
    }
}

export default function formatedDate({ date }) {
    const newDate = new Date(date);
    const dia = newDate.getDate().toString().padStart(2, "0");
    const mes = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const año = newDate.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${año}`;
    return fechaFormateada;
}
