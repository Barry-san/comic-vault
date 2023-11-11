import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-primary-0 flex justify-between p-4 border-t">
      <div>
        <p>&copy; 2023 Powered by Marvel</p>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/barry-san" target="_blank">
          <Image
            src="/github.svg"
            alt="github logo"
            title="github"
            width={30}
            height={30}
          />
        </a>
        <a href="https://twitter.com/barry9ja" target="_blank">
          <Image
            src="/twitter.svg"
            alt="twitter logo"
            title="twitter"
            width={30}
            height={30}
          />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <Image
            src="/linkedin.svg"
            alt="linkedin logo"
            title="linkedin"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  );
}
