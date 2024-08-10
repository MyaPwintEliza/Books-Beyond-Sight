import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="py-12 text-gray-800 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            About Books Beyond Sight (BBS)
          </h1>
          <p className="text-lg">
            Books Beyond Sight (BBS) is dedicated to making literature
            accessible to everyone, regardless of their ability to see. We
            create audio versions of books, organize community events, and
            foster a love for reading in all forms.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
          <p className="text-lg">
            Our mission is to bridge the gap between sighted and visually
            impaired individuals by providing high-quality audio books and
            promoting inclusive reading experiences. We believe in the power of
            literature to bring people together and create empathy across
            diverse communities.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">What We Do</h2>
          <ul className="text-lg list-disc list-inside">
            <li className="mb-4">
              Produce and distribute audio books recorded by volunteers.
            </li>
            <li className="mb-4">
              Host events that encourage reading and inclusivity, like the
              စာဖတ်သံ event.
            </li>
            <li className="mb-4">
              Collaborate with libraries, schools, and community centers to make
              reading materials accessible.
            </li>
            <li className="mb-4">
              Offer workshops and training for those interested in creating
              audio content.
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Our Team</h2>
          <p className="text-lg">
            BBS is run by a passionate group of volunteers who are committed to
            making a difference in the lives of visually impaired readers. Our
            team includes a diverse range of professionals, educators, and
            community members who all share a love for books and a dedication to
            inclusivity.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Photos</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="shadow-lg card">
              <figure>
                <img
                  src="path-to-your-image1.jpg"
                  alt="BBS Event 1"
                  className="object-cover w-full h-48"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">BBS Event 1</h3>
                <p>A gathering of book lovers at our latest event.</p>
              </div>
            </div>
            <div className="shadow-lg card">
              <figure>
                <img
                  src="path-to-your-image2.jpg"
                  alt="BBS Event 2"
                  className="object-cover w-full h-48"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">BBS Event 2</h3>
                <p>Volunteers recording audio books for our library.</p>
              </div>
            </div>
            <div className="shadow-lg card">
              <figure>
                <img
                  src="path-to-your-image3.jpg"
                  alt="BBS Event 3"
                  className="object-cover w-full h-48"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">BBS Event 3</h3>
                <p>
                  Our team members working together to promote inclusive
                  reading.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
