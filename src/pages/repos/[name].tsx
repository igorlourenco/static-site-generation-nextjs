import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";


export default function Repo({repo}) {

    const {isFallback} = useRouter()

    if (isFallback){
        return (
            <h1>carregando...</h1>
        )
    }

    return (
        <div>
            <h1>{repo.name}</h1>
            <p>Site: <a href={repo.html_url}>{repo.html_url}</a></p>
        </div>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://api.github.com/users/igorlrnc/repos`)
    const data = await response.json()

    const paths = data.map(repo => {
        return {params: {name: repo.name}}
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {name} = context.params

    const response = await fetch(`https://api.github.com/repos/igorlrnc/${name}`)
    const data = await response.json()

    return {
        props: {
            repo: data
        }, revalidate: 30
    }
}