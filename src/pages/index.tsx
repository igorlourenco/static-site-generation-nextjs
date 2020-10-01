import {GetStaticProps} from "next";

export default function Home({user}) {
    return (
        <div>
            <h1>{user.login}</h1>
            <h3>{user.bio}</h3>

            <p>Site: <a href={user.blog}>{user.blog}</a></p>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const response = await fetch(`https://api.github.com/users/igorlrnc`)
    const data = await response.json()

    return {
        props: {
            user: data
        }, revalidate: 10
    }
};