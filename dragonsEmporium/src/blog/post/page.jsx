import React from 'react';
import Video from "./video.jsx";
import Iframe from "./videoIframe.jsx";
import CodeArea from "./codeArea.jsx";
import ImageText from "./imageText.jsx";
import ImageViewer from "./imageOne.jsx";
import ImageGallery from "./gallery.jsx"
import Breadcrumbs from './Breadcrumb.jsx';
import FAQ from './Faq.jsx';
import SocialShare from './Social.jsx';
import Header from './Header.jsx';
import Lead from './Lead.jsx';
import HeaderTwo from './HeaderTwo.jsx';
import Paragraph from './Paragraph.jsx';
import ParagraphAnchor from './ParagraphAnchor.jsx';
import ParagraphAnchorTwo from './ParagraphAnchorTwo.jsx';
import OrderedListComponent from './OrderedList.jsx';
import WarningSection from './WarningSection.jsx';
import ProgressBar from './ProgressBar.jsx';
import FloatingMenu from './FloatingMenu.jsx';
import AuthorBox from './AuthorBox.jsx';
import FeedbackSection from './FeedbackSection.jsx';
import DownloadSection from './DownloadSection.jsx';
const directories = [
    {
      name: 'Home',
      url: '#',
      icon: 'm19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z',
    },
    { name: 'Guides', url: '#projects' },
    { name: 'Electronics', url: '#flowbite', current: true }
  ];
  const listItemsOne = [
    {
      title: 'Flat head screwdriver',
      content: 'Prepare at least a pair of flat head screwdrivers to pry open the plastic, having different dimensions is ideal'
    },
    {
      title: 'Phillips screwdriver',
      content: 'Like the flat heads, get at least a pair of Philips head screwdrivers to unscrew the casing of your monitor'
    },
    {
      title: 'Pliers (optional)',
      content: 'Sometimes pliers are also needed to unscrew the nuts that keep the connectors atached to the casing or to disconnect the cables'
    },
    {
      title: 'Cutter',
      content: 'Grab something sharp like knife or a cutter to slice the flex cables of the lcd panel'
    },
    {
        title: 'Soldering iron',
        content: 'You need a soldering iron to solder the leds'
      },
      
  ];
  const listItemsTwo = [
    {
      title: 'LED strip',
      content: 'Buy a led strip, there are different types, ideally try to get one with a high density of leds (ex. 144 LEDS/m)'
    },
    {
      title: 'Solder',
      content: 'Get some thin solder, it should ideally be lead free and it should have a rosin core '
    },
    {
      title: 'L shaped aluminum channels (optional, only if you want to use the backlight as a panel)',
      content: 'Get some L channels if you want to make a simple frame for the panel, if you want to create a backlit section for your props skip this step  '
    },
    {
      title: 'Heat shrink tubing/electrical tape (crucial)',
      content: 'Buy some to protect your connections, especially against shorting if you are making a panel'
    },
    {
        title: 'PPE, gloves and mask',
        content: 'Protect your health with the proper equipment '
      },
      
  ];
const codeString = `#!/usr/bin/env python3

from rpi_ws281x import PixelStrip, Color
from time import sleep
import threading
import argparse

LED_COUNT = 24
LED1 = 18
LED2 = 13


def blackout(strip):
    for i in range(LED_COUNT):
        strip.setPixelColor(i, Color(0, 0, 0))
    strip.show()


def turnOn(strip, n, color):
    strip.setPixelColor(n, color)
    strip.show()


def rainbow(strip, start, end):
    for i in range(start, end):
        strip.setPixelColor(i, wheel((i * 256 // LED_COUNT) & 255))
    strip.show()


def colorWipeArcobalenoGraduale(strip, start, end, wait_ms=200):
    for i in range(start, end):
        color_wipe_pixel = wheel((i * 256 // strip.numPixels()) & 255)
        strip.setPixelColor(i, color_wipe_pixel)
        strip.show()
        sleep(wait_ms / (1000.0 * strip.numPixels()))  # Graduale


def wheel(pos):
    if pos < 85:
        return Color(pos * 3, 255 - pos * 3, 0)
    elif pos < 170:
        pos -= 85
        return Color(255 - pos * 3, 0, pos * 3)
    else:
        pos -= 170
        return Color(0, pos * 3, 255 - pos * 3)


def animate_colorwipe_graduale(strip, start, end, animation_duration=10, pause_duration=1):
    while True:
        colorWipeArcobalenoGraduale(strip, start, end, wait_ms=animation_duration * 1000)
        sleep(pause_duration)
        blackout(strip)
        sleep(pause_duration)


if __name__ == '__main__':
    strip1 = PixelStrip(LED_COUNT, LED1, 800000, 10, False, 200, 0)
    strip2 = PixelStrip(LED_COUNT, LED2, 800000, 11, False, 255, 1)

    parser = argparse.ArgumentParser()
    parser.add_argument("--strip", help="seleziona la striscia desiderata", type=int)
    args = parser.parse_args()

    strip1.begin()
    strip2.begin()

    try:
        if args.strip == 1:
            t1 = threading.Thread(target=animate_colorwipe_graduale, args=(strip1, 0, LED_COUNT // 2))
            t2 = threading.Thread(target=animate_colorwipe_graduale, args=(strip1, LED_COUNT // 2, LED_COUNT))
        elif args.strip == 2:
            t1 = threading.Thread(target=animate_colorwipe_graduale, args=(strip2, 0, LED_COUNT // 2))
            t2 = threading.Thread(target=animate_colorwipe_graduale, args=(strip2, LED_COUNT // 2, LED_COUNT))
        else:
            raise ValueError("Valore non valido per l'argomento --strip. Utilizzare 1 o 2.")

        t1.start()
        t2.start()
        t1.join()
        t2.join()

    except KeyboardInterrupt:
        blackout(strip1)
        blackout(strip2)`;

  
        const authorInfo = {
            name: 'File',
            bio: 'Experienced costume maker.',
            avatar: '../src/assets/LD.png'  // Make sure to have a valid path or URL here.
        };
        
const Page = () => {
    return (
        <>
           

<main class="pt-4 pb-8 antialiased">
  <div class="flex justify-between px-4 mx-auto ">
      <article class="mx-auto w-full max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <ProgressBar />
          <FloatingMenu />
          <Header date="2024-05-04" title="Salvaging the backlight of an old monitor for your projects" directories={directories}/>
          <Lead content="Do you have an old/broken monitor that is lying around your office gathering dust? If the answer is yes, 
          this guide is just for you! follow this tutorial to learn how to reuse the backlight for your projects."/>
          <HeaderTwo content="Before we start.."/>
          <WarningSection text="Caution (High voltage/Temperatures): Following this guide incorrectly may lead to injury or damage, follow it at your own risk. We won't take responsibility for any damage resulting from following the guide." />
          <HeaderTwo content="Tools"/>
          <OrderedListComponent items={listItemsOne} />
          <HeaderTwo content="Materials"/>
          <OrderedListComponent items={listItemsTwo} />
          <Paragraph content="Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
              you can think things through before committing to an actual design project."/>
          <ParagraphAnchorTwo contentB="But then I found a " anchor="https://flowbite.com" anchorText="component library based on Tailwind CSS called
                  Flowbite" contentA=". It comes with the most commonly used UI components, such as buttons, navigation
                  bars, cards, form elements, and more which are conveniently built with the utility classes from
                  Tailwind CSS"/>
          
              
          <ImageViewer src="../../src/assets/img1.JPG"/>
          
          <h2 className="font-extrabold">Getting started with Flowbite</h2>
          <p>First of all you need to understand how Flowbite works. This library is not another framework.
              Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
              documentation.</p>
          <p>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
              and datepickers which you can optionally include into your project via CDN or NPM.</p>
          <p>You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/">quickstart
                  guide</a> to explore the elements by including the CDN files into your project. But if you want
              to build a project with Flowbite I recommend you to follow the build tools steps so that you can
              purge and minify the generated CSS.</p>
          <p>You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help
              you get started with your projects even faster. You can check out this <a
                  href="https://flowbite.com/docs/components/tables/">comparison table</a> to better understand
              the differences between the open-source and pro version of Flowbite.</p>
          
          <h2>When does design come in handy?</h2>
          <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
              will come in handy:</p>
          
          
          
          <h3>Laying the groundwork for best design</h3>
          <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
              you can think things through before committing to an actual design project.</p>
          <p>Let's start by including the CSS file inside the <code>head</code> tag of your HTML.</p>
          <h3>Understanding typography</h3>
          <h4>Type properties</h4>
          <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
              letters. A typeface represents shared patterns across a collection of letters.</p>
          <h4>Baseline</h4>
          <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
              letters. A typeface represents shared patterns across a collection of letters.</p>
          <h4>Measurement from the baseline</h4>
          <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
              letters. A typeface represents shared patterns across a collection of letters.</p>
          <h3>Type classification</h3>
          <h4>Serif</h4>
          <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
              Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
              following:</p>
          <h4>Old-Style serifs</h4>
          <ul>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
          </ul><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png" alt=""/>
          <ol>
              <li>Low contrast between thick and thin strokes</li>
              <li>Diagonal stress in the strokes</li>
              <li>Slanted serifs on lower-case ascenders</li>
          </ol>
          <h3>Laying the best for successful prototyping</h3>
          <p>A serif is a small shape or projection that appears at the beginning:</p>
          <blockquote>
              <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from
                  login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
          </blockquote>
          <h4>Code example</h4>
          <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
              Typefaces with serifs are called serif typefaces. Serif fonts are classified as one of the
              following:</p>
          

        <CodeArea header="test" code={codeString}></CodeArea>
          <h4>Table example</h4>
          <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
          </p>
          <table className="rounded-lg shadow-xl shadow-purple-700/50">
              <thead className="bg-gray-900">
                  <tr>
                      <th>Country</th>
                      <th>Date &amp; Time</th>
                      <th>Amount</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>United States</td>
                      <td>April 21, 2021</td>
                      <td><strong>$2,300</strong></td>
                  </tr>
                  <tr>
                      <td>Canada</td>
                      <td>May 31, 2021</td>
                      <td><strong>$300</strong></td>
                  </tr>
                  <tr>
                      <td>United Kingdom</td>
                      <td>June 3, 2021</td>
                      <td><strong>$2,500</strong></td>
                  </tr>
                  <tr>
                      <td>Australia</td>
                      <td>June 23, 2021</td>
                      <td><strong>$3,543</strong></td>
                  </tr>
                  <tr>
                      <td>Germany</td>
                      <td>July 6, 2021</td>
                      <td><strong>$99</strong></td>
                  </tr>
                  <tr>
                      <td>France</td>
                      <td>August 23, 2021</td>
                      <td><strong>$2,540</strong></td>
                  </tr>
              </tbody>
          </table>
          <h3>Best practices for setting up your prototype</h3>
          
          {/*<ImageText />*/}
          <ImageGallery />
          <p><strong>Low fidelity or high fidelity?</strong> Fidelity refers to how close a prototype will be to
              the real deal. If you’re simply preparing a quick visual aid for a presentation, a low-fidelity
              prototype — like a wireframe with placeholder images and some basic text — would be more than
              enough. But if you’re going for more intricate usability testing, a high-fidelity prototype — with
              on-brand colors, fonts and imagery — could help get more pointed results.</p>
          <p><strong>Consider your user</strong>. To create an intuitive user flow, try to think as your user
              would when interacting with your product. While you can fine-tune this during beta testing,
              considering your user’s needs and habits early on will save you time by setting you on the right
              path.</p>
          <p><strong>Start from the inside out</strong>. A nice way to both organize your tasks and create more
              user-friendly prototypes is by building your prototypes ‘inside out’. Start by focusing on what will
              be important to your user, like a Buy now button or an image gallery, and list each element by order
              of priority. This way, you’ll be able to create a prototype that puts your users’ needs at the heart
              of your design.</p>
          <p>And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.
          </p>
          <FAQ />
            {/*<Video src="../../src/assets/your_video.mp4"/>*/}
            <Iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"/>
            <hr></hr>
            <SocialShare url="https://yourblogposturl.com" title="Awesome Blog Post" />
            <AuthorBox author={authorInfo} />
            <FeedbackSection />
            <DownloadSection />
      </article>
  </div>
</main>






           
        </>
    );
}

export default Page;

