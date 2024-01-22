<script setup lang="ts">
</script>
<!-- Just a pdf embeded on the page... not much going on here.-->
<template>

    <object data="/src/assets/resume-highSchool.pdf" type="application/pdf" width="100%" height="900px">
      <p>Unable to display PDF file. <a href="/src/assets/resume-highSchool.pdf">Download</a> instead.</p>
        <embed src="/src/assets/resume-highSchool.pdf"
               type="application/pdf"
               width="100%"
               height="900px"
               align="center"
        />
    </object>
</template>
