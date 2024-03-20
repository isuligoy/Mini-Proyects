const link =
    "https://api.github.com/repos/isuligoy/Mini-Proyects/actions/workflows/deploy.yml/runs";

async function getDate() {
    try {
        const data = await fetch(link);
        const info = await data.json();
        console.log(info.workflow_runs[0].created_at);
    } catch (err) {
        console.log(err);
    }
}
getDate();
