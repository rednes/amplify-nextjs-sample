'use server'

export default async function Hello({searchParams}: {searchParams: {a?: string}}) {

    return <div>{Date.now().toString() + (searchParams.a ?? '')}</div>
}