import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import { URLs } from '@/constants.js';
import { Link } from 'react-router-dom';

function TweetMain() {
  return (
    <main className="flex w-full flex-grow items-center justify-center bg-neutral-1000">
      <section className="flex w-full flex-col gap-10 px-7">
        <section className="flex flex-col gap-3">
          <Heading>Happening now</Heading>
          <Text text="Join today." />
        </section>
        <Link to={URLs.signUpStep1}>
          <Button variant="default" disabled={false}>
            Create account
          </Button>
        </Link>
        <div className="flex items-center">
          <hr className="mr-2 flex-grow border-t-2 border-neutral-700" />
          <span className="font-regular text-base leading-normal text-neutral-50">
            or
          </span>
          <hr className="ml-2 flex-grow border-t-2 border-neutral-700" />
        </div>
        <section className="flex flex-col gap-5">
          <Text text="Already have an account?" />
          <Link to={URLs.feed}>
            <Button variant="outline" type="primary" size="full">
              Sign in
            </Button>
          </Link>
        </section>
      </section>
    </main>
  );
}

export default TweetMain;
