<script setup lang="ts">
// TODO: vue router link card
import { EaCardStudent, EaLayout } from 'components'
import AidenRoberts from '@assets/img/students/aiden-roberts.jpg'
import AmaraLee from '@assets/img/students/amara-lee.jpg'
import ChloeMartin from '@assets/img/students/chloe-martin.jpg'
import EmilyCarter from '@assets/img/students/emily-carter.jpg'
import JordanSmith from '@assets/img/students/jordan-smith.jpg'
import LiamGarcia from '@assets/img/students/liam-garcia.jpg'
import LiamPatel from '@assets/img/students/liam-patel.jpg'
import NoahAdams from '@assets/img/students/noah-adams.jpg'
import RyanNguyen from '@assets/img/students/ryan-nguyen.jpg'
import SophiaBennett from '@assets/img/students/sophia-bennett.jpg'
import SophiaHernandez from '@assets/img/students/sophia-hernandez.jpg'

type Students = Array<Student>

type Student = {
  name: string
  year: string
  activity: 'sports' | 'art' | 'leaders' | 'environmental' | 'scholarship'
  team: string
  intro: string
  description: string
}
const {
  groups = [
    [
      {
        img: JordanSmith,
        name: 'Jordan Smith',
        year: '2024',
        activity: 'sports',
        team: 'Varsity Soccer',
        intro: 'Jordan is the captain of the Varsity Soccer Team.',
        description:
          'As captain, Jordan led the team to the state championships in 2024, showcasing exceptional leadership both on and off the field. Known for their agility and strategic gameplay, Jordan has become a role model for younger players, inspiring teamwork and determination across the team.',
      },
      {
        img: EmilyCarter,
        name: 'Emily Carter',
        year: '2023',
        activity: 'sports',
        team: 'Track and Field',
        intro: 'Emily holds the school record for the 400-meter dash.',
        description:
          'Emily’s record-breaking performance at the regional meet secured her position as one of the top sprinters in the state. Her dedication to rigorous training and her ability to balance academics with athletics make her an exemplary student-athlete.',
      },
      {
        img: RyanNguyen,
        name: 'Ryan Nguyen',
        year: '2025',
        activity: 'sports',
        team: 'Basketball',
        intro: 'Ryan is the leading scorer on the Varsity Basketball Team.',
        description:
          'With an average of 20 points per game, Ryan has propelled the basketball team to their best season in a decade. Off the court, Ryan is equally passionate about mentoring younger players, offering guidance and motivation.',
      },
    ],
    [
      {
        img: SophiaHernandez,
        name: 'Sophia Hernandez',
        year: '2024',
        activity: 'art',
        team: 'Visual Arts Club',
        intro: 'Sophia is known for her breathtaking mural work on campus.',
        description:
          'Sophia’s murals have transformed the campus walls into vibrant stories of community and hope. Her artistic vision not only beautifies the environment but also highlights themes of diversity and inclusion.',
      },
      {
        img: LiamPatel,
        name: 'Liam Patel',
        year: '2023',
        activity: 'art',
        team: 'Theater Arts',
        intro: 'Liam starred as the lead in this year’s school musical.',
        description:
          'Liam’s commanding stage presence brought the character of Jean Valjean to life in the school’s rendition of *Les Misérables*. Beyond acting, Liam is deeply involved in set design and encourages others to explore their theatrical talents.',
      },
      {
        img: AmaraLee,
        name: 'Amara Lee',
        year: '2025',
        activity: 'art',
        team: 'Photography Club',
        intro: 'Amara is an award-winning photographer.',
        description:
          'Amara’s keen eye for detail has earned her several accolades at local photography contests. Her photos often focus on nature and human connection, reflecting Evergreen Academy’s core values.',
      },
    ],
    [
      {
        img: AidenRoberts,
        name: 'Aiden Roberts',
        year: '2023',
        activity: 'leaders',
        team: 'Student Government',
        intro: 'Aiden served as student body president.',
        description:
          'During his tenure, Aiden implemented initiatives to improve mental health resources and enhance communication between students and staff. His leadership has left a lasting legacy of inclusivity and progress.',
      },
    ],
    [
      {
        img: ChloeMartin,
        name: 'Chloe Martin',
        year: '2024',
        activity: 'environmental',
        team: 'Eco Warriors Club',
        intro: 'Chloe founded the Eco Warriors Club at Evergreen Academy.',
        description:
          'Chloe’s passion for sustainability led her to create a club dedicated to reducing the school’s carbon footprint. Her initiatives include tree planting, waste reduction programs, and eco-education workshops for students.',
      },
      {
        img: NoahAdams,
        name: 'Noah Adams',
        year: '2023',
        activity: 'environmental',
        team: 'Recycling Program',
        intro: 'Noah revamped the school’s recycling program.',
        description:
          'By implementing new collection systems and educating students about proper recycling practices, Noah doubled the school’s recycling rate. His efforts have become a model for other schools in the district.',
      },
    ],
    [
      {
        img: LiamGarcia,
        name: 'Liam Garcia',
        year: '2024',
        activity: 'scholarship',
        team: 'Science Fair',
        intro: 'Liam developed an award-winning robotics project.',
        description:
          'Liam’s robotics project, focusing on AI-driven prosthetics, won first place at the state science fair. His innovative work bridges technology and compassion, addressing real-world challenges.',
      },
      {
        img: SophiaBennett,
        name: 'Sophia Bennett',
        year: '2025',
        activity: 'scholarship',
        team: 'Literary Magazine',
        intro: 'Sophia is the editor-in-chief of the school’s literary magazine.',
        description:
          'Sophia’s leadership has transformed the literary magazine into a platform for student creativity. Her insightful editing and compelling writing have elevated the publication to new heights.',
      },
    ],
  ],
} = defineProps<{
  groups: Array<Students>
}>()
</script>
<template>
  <ea-layout>
    <section class="grid center grid-3 gap-m" v-for="(students, index) in groups" :key="index">
      <ea-card-student
        v-for="(student, index) in students"
        :key="index"
        :imageSrc="student.img"
        :headline="student.name"
        :name="student.name"
        :year="student.year"
        :activity="student.activity"
        :team="student.team"
        :cardHref="`/profile/${student.name}`"
      ></ea-card-student>
    </section>
  </ea-layout>
</template>

<style scoped lang="scss">
.grid {
  max-inline-size: 950px;
  padding-block: var(--space-2xs);
}
</style>
