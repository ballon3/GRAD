import graphene

from graphene_django.types import DjangoObjectType

from ballon.models import Resume, Main, Education, Testimonial, Address, Social, Work, Skill, Project  

class ResumeType(DjangoObjectType):
    class Meta:
        model = Resume

class MainType(DjangoObjectType):
    class Meta:
        model = Main

class EducationType(DjangoObjectType):
    class Meta:
        model = Education

class AddressType(DjangoObjectType):
    class Meta:
        model = Address

class WorkType(DjangoObjectType):
    class Meta:
        model = Work

class SkillType(DjangoObjectType):
    class Meta:
        model = Skill

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project

class TestimonialType(DjangoObjectType):
    class Meta:
        model = Testimonial

class SocialType(DjangoObjectType):
    class Meta:
        model = Social


class Query(graphene.AbstractType):
    
    all_main = graphene.List(MainType)
    all_resume = graphene.List(ResumeType)
    
    all_work = graphene.List(WorkType)
    all_education = graphene.List(EducationType)
    all_skill = graphene.List(SkillType)
    all_testimonial = graphene.List(TestimonialType)
    all_social = graphene.List(SocialType)

    resume = graphene.Field(ResumeType, id=graphene.ID())


    def resolve_resume(self, *args, **kwargs):
        id = args.get('id')
        
        if id is not None:
            return Resume.objects.get(pk=id)

        return None
    
    def resolve_all_resume(self, args):
        return Resume.objects.all()

    def resolve_all_main(self, args):
        return Main.objects.all()
    
    def resolve_all_address(self, args):
        return Address.objects.all()

    def resolve_all_social(self, args):
        return Social.objects.all()

    def resolve_all_education(self, args):
        return Education.objects.all()
    
    def resolve_all_work(self, args):
        return Work.objects.all()

    def resolve_all_skill(self, args):
        return Skill.objects.all()

    def resolve_all_project(self, args):
        return Project.objects.all()
   
    def resolve_all_testimonial(self, args):
        return Testimonial.objects.all()












    
