import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <Image
            src="https://qctxtzxpbyfftroayoaq.supabase.co/storage/v1/object/public/avatar/fcc303494.png"
            width={100}
            height={100}
            alt="minho-avatar"
          />
          <h1 className="mb-3 text-2xl font-semibold tracking-tighter">
            Minho LEE
          </h1>
          <p className="font-bold mb-3">happy hacking :)</p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            <img src="https://skillicons.dev/icons?i=react" alt="react-icon" />
            <img
              src="https://skillicons.dev/icons?i=typescript"
              alt="typescript-icon"
            />
            <img
              src="https://skillicons.dev/icons?i=javascript"
              alt="javascript-icon"
            />
            <img src="https://skillicons.dev/icons?i=vue" alt="vue-icon" />
          </div>
        </div>
      </div>
      <p className="mt-10 font-semibold text-lg">
        배움의 즐거움을 실천하며 성장하는 프론트엔드 개발자입니다.
      </p>
      <p>
        의류 판매원으로서 쌓은 고객 소통과 문제 해결 경험을 바탕으로, 현재는
        React와 TypeScript를 활용해 사용자 중심의 웹 개발에 집중하며 지속적으로
        성장하고 있습니다.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
