<script setup lang="ts">
type Student = {
  name: string
  year: string
  activity: 'sports' | 'art' | 'leaders' | 'environmental' | 'scholarship'
  team: string
  intro: string
  description: string
}
const {
  athletes = [
    {
      name: 'Jordan Smith',
      year: '2024',
      activity: 'sports',
      team: 'Varsity Soccer',
      intro: 'Jordan is the captain of the Varsity Soccer Team.',
      description:
        'As captain, Jordan led the team to the state championships in 2024, showcasing exceptional leadership both on and off the field. Known for their agility and strategic gameplay, Jordan has become a role model for younger players, inspiring teamwork and determination across the team.',
    },
    {
      name: 'Emily Carter',
      year: '2023',
      activity: 'sports',
      team: 'Track and Field',
      intro: 'Emily holds the school record for the 400-meter dash.',
      description:
        'Emily’s record-breaking performance at the regional meet secured her position as one of the top sprinters in the state. Her dedication to rigorous training and her ability to balance academics with athletics make her an exemplary student-athlete.',
    },
    {
      name: 'Ryan Nguyen',
      year: '2025',
      activity: 'sports',
      team: 'Basketball',
      intro: 'Ryan is the leading scorer on the Varsity Basketball Team.',
      description:
        'With an average of 20 points per game, Ryan has propelled the basketball team to their best season in a decade. Off the court, Ryan is equally passionate about mentoring younger players, offering guidance and motivation.',
    },
  ],
  artists = [
    {
      name: 'Sophia Hernandez',
      year: '2024',
      activity: 'art',
      team: 'Visual Arts Club',
      intro: 'Sophia is known for her breathtaking mural work on campus.',
      description:
        'Sophia’s murals have transformed the campus walls into vibrant stories of community and hope. Her artistic vision not only beautifies the environment but also highlights themes of diversity and inclusion.',
    },
    {
      name: 'Liam Patel',
      year: '2023',
      activity: 'art',
      team: 'Theater Arts',
      intro: 'Liam starred as the lead in this year’s school musical.',
      description:
        'Liam’s commanding stage presence brought the character of Jean Valjean to life in the school’s rendition of *Les Misérables*. Beyond acting, Liam is deeply involved in set design and encourages others to explore their theatrical talents.',
    },
    {
      name: 'Amara Lee',
      year: '2025',
      activity: 'art',
      team: 'Photography Club',
      intro: 'Amara is an award-winning photographer.',
      description:
        'Amara’s keen eye for detail has earned her several accolades at local photography contests. Her photos often focus on nature and human connection, reflecting Evergreen Academy’s core values.',
    },
  ],
  communityLeaders = [
    {
      name: 'Aiden Roberts',
      year: '2023',
      activity: 'leaders',
      team: 'Student Government',
      intro: 'Aiden served as student body president.',
      description:
        'During his tenure, Aiden implemented initiatives to improve mental health resources and enhance communication between students and staff. His leadership has left a lasting legacy of inclusivity and progress.',
    },
    {
      name: 'Maya Johnson',
      year: '2024',
      activity: 'leaders',
      team: 'Debate Team',
      intro: 'Maya is a regional debate champion.',
      description:
        'With her persuasive arguments and in-depth research, Maya secured the regional debate title for Evergreen Academy. She mentors new team members and encourages them to find their voice in public speaking.',
    },
    {
      name: 'Ethan Kim',
      year: '2025',
      activity: 'leaders',
      team: 'Volunteer Club',
      intro: 'Ethan led a major food drive for the local community.',
      description:
        'Ethan organized a school-wide food drive that collected over 5,000 meals for families in need. His ability to inspire participation highlights his genuine passion for community service and teamwork.',
    },
  ],
  environmentalStewards = [
    {
      name: 'Chloe Martin',
      year: '2024',
      activity: 'environmental',
      team: 'Eco Warriors Club',
      intro: 'Chloe founded the Eco Warriors Club at Evergreen Academy.',
      description:
        'Chloe’s passion for sustainability led her to create a club dedicated to reducing the school’s carbon footprint. Her initiatives include tree planting, waste reduction programs, and eco-education workshops for students.',
    },
    {
      name: 'Noah Adams',
      year: '2023',
      activity: 'environmental',
      team: 'Recycling Program',
      intro: 'Noah revamped the school’s recycling program.',
      description:
        'By implementing new collection systems and educating students about proper recycling practices, Noah doubled the school’s recycling rate. His efforts have become a model for other schools in the district.',
    },
    {
      name: 'Olivia Torres',
      year: '2025',
      activity: 'environmental',
      team: 'Greenhouse Project',
      intro: 'Olivia manages the school’s greenhouse.',
      description:
        'Olivia’s leadership of the greenhouse project has provided fresh produce for the cafeteria and hands-on learning experiences for science students. Her dedication to sustainable agriculture is inspiring future environmentalists.',
    },
  ],
  scholars = [
    {
      name: 'Isabella Cruz',
      year: '2023',
      activity: 'scholarship',
      team: 'Math Olympiad Team',
      intro: 'Isabella won first place at the National Math Olympiad.',
      description:
        'Isabella’s mathematical prowess has earned her national recognition. Her logical thinking and problem-solving skills have inspired peers to strive for excellence in STEM fields.',
    },
    {
      name: 'Liam Garcia',
      year: '2024',
      activity: 'scholarship',
      team: 'Science Fair',
      intro: 'Liam developed an award-winning robotics project.',
      description:
        'Liam’s robotics project, focusing on AI-driven prosthetics, won first place at the state science fair. His innovative work bridges technology and compassion, addressing real-world challenges.',
    },
    {
      name: 'Sophia Bennett',
      year: '2025',
      activity: 'scholarship',
      team: 'Literary Magazine',
      intro: 'Sophia is the editor-in-chief of the school’s literary magazine.',
      description:
        'Sophia’s leadership has transformed the literary magazine into a platform for student creativity. Her insightful editing and compelling writing have elevated the publication to new heights.',
    },
  ],
} = defineProps<{
  type: 'athletes' | 'artists' | 'communityLeaders' | 'environmentalStewards' | 'scholars'
  athletes: Array<Student>
  artists: Array<Student>
  communityLeaders: Array<Student>
  environmentalStewards: Array<Student>
  scholars: Array<Student>
}>()
</script>

<template>
  <Layout>
    <main v-if="type === 'athletes'" class="grid col-3">
      <Card v-for="student in athletes" :key="student" />
    </main>
    <main v-else-if="type === 'artists'" class="grid col-3">
      <Card v-for="student in artists" :key="student" />
    </main>
    <main v-else-if="type === 'communityLeaders'" class="grid col-3">
      <Card v-for="student in communityLeaders" :key="student" />
    </main>
    <main v-else-if="type === 'environmentalStewards'" class="grid col-3">
      <Card v-for="student in environmentalStewards" :key="student" />
    </main>
    <main v-else-if="type === 'scholars'" class="grid col-3">
      <Card v-for="student in scholars" :key="student" />
    </main>
  </Layout>
</template>

<style scoped lang="scss"></style>
