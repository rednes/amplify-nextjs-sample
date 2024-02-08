'use server'

import {ListBucketsCommand, S3Client} from "@aws-sdk/client-s3";

export default async function Home() {
    const getS3List = async (): Promise<any[]> => {
        try {
            const client = new S3Client()
            const command = new ListBucketsCommand({})
            const response = await client.send(command)
            return response?.Buckets
        } catch (error) {
            console.log(error)
        }
        return []
    }

    const s3list = await getS3List()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <table>
            <thead>
                <tr>
                    <th>バケット名</th>
                    <th>作成日</th>
                </tr>
            </thead>
            <tbody>
                {s3list.map((bucket: any) => {
                    return <tr key={bucket.Name}>
                        <td>{bucket.Name}</td>
                        <td>{bucket.CreationDate.toString()}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </main>
  );
}
