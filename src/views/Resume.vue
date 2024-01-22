<script setup lang="ts">
</script>
<!-- Just a pdf embeded on the page... not much going on here.-->
<template>

    <object data="/public/resume-highSchool.pdf" type="application/pdf" width="100%" height="900px">
      <p>Unable to display PDF file. <a href="/public/resume-highSchool.pdf">Download</a> instead.</p>
        <embed src="/public/resume-highSchool.pdf"
               type="application/pdf"
               width="100%"
               height="900px"
               align="center"
        />
    </object>
</template>
