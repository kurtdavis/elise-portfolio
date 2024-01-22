<script setup lang="ts">
</script>
<!-- Just a pdf embeded on the page... not much going on here.-->
<template>

    <object data="imgs/resume-highSchool.pdf" type="application/pdf" width="100%" height="900px">
      <p>Unable to display PDF file. <a href="imgs/resume-highSchool.pdf">Download</a> instead.</p>
        <embed src="imgs/resume-highSchool.pdf"
               type="application/pdf"
               width="100%"
               height="900px"
               align="center"
        />
    </object>
</template>
